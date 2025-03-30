<script setup lang="ts">
import { ref, computed, onMounted } from 'vue';
import type { Advice } from '../types/Advice';
import apiClient from '../api/client';

const advices = ref<Advice[]>([]);
const filterText = ref('');
const filterId = ref('');
const filterExternalId = ref('');
const sortKey = ref<keyof Advice>('externalId');
const sortDirection = ref<'asc' | 'desc'>('asc');

onMounted(async () => {
  try {
    const response = await apiClient.getAdvices();
    advices.value = response.data;
  } catch (error) {
    console.error('Error fetching advices:', error);
  }
});


const filteredAdvices = computed(() => {
  return advices.value.filter(advice => {
    const textMatch = (advice.adviceText || '')
      .toLowerCase()
      .includes(filterText.value.toLowerCase());
    
    const idMatch = filterId.value === '' 
      ? true 
      : advice.id?.toString().includes(filterId.value);
    
    const externalIdMatch = filterExternalId.value === ''
      ? true
      : advice.externalId.toString().includes(filterExternalId.value);

    return textMatch && idMatch && externalIdMatch;
  });
});

const sortedAdvices = computed(() => {
  return [...filteredAdvices.value].sort((a, b) => {
    const modifier = sortDirection.value === 'asc' ? 1 : -1;
    
    if (sortKey.value === 'createdAt') {
      return (new Date(a.createdAt).getTime() - new Date(b.createdAt).getTime()) * modifier;
    }
    
    return (
      (a[sortKey.value]! > b[sortKey.value]! ? 1 : -1) * modifier
    );
  });
});

const setSort = (key: keyof Advice) => {
  if (sortKey.value === key) {
    sortDirection.value = sortDirection.value === 'asc' ? 'desc' : 'asc';
  } else {
    sortKey.value = key;
    sortDirection.value = 'asc';
  }
};

const formatDate = (dateString: string) => {
  return new Date(dateString).toLocaleString();
};
</script>

<template>
  <div class="container">
    <div class="filters">
      <input
        v-model="filterId"
        type="text"
        placeholder="Filter by ID (contains)"
        class="filter-input"
        pattern="\d*"
      />
      <input
        v-model="filterExternalId"
        type="text"
        placeholder="Filter by External ID (contains)"
        class="filter-input"
        pattern="\d*"
      />
      <input
        v-model="filterText"
        type="text"
        placeholder="Filter by advice text..."
        class="filter-input"
      />
    </div>

    <table class="advice-table">
      <thead>
        <tr>
          <th @click="setSort('id')">
            ID 
            <span v-if="sortKey === 'id'">{{ sortDirection === 'asc' ? '↑' : '↓' }}</span>
          </th>
          <th @click="setSort('externalId')">
            External ID 
            <span v-if="sortKey === 'externalId'">{{ sortDirection === 'asc' ? '↑' : '↓' }}</span>
          </th>
          <th @click="setSort('adviceText')">
            Advice 
            <span v-if="sortKey === 'adviceText'">{{ sortDirection === 'asc' ? '↑' : '↓' }}</span>
          </th>
          <th @click="setSort('createdAt')">
            Created At 
            <span v-if="sortKey === 'createdAt'">{{ sortDirection === 'asc' ? '↑' : '↓' }}</span>
          </th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="advice in sortedAdvices" :key="advice.id">
          <td>{{ advice.id }}</td>
          <td>{{ advice.externalId }}</td>
          <td>{{ advice.adviceText || '-' }}</td>
          <td>{{ formatDate(advice.createdAt) }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<style scoped>

.advice-table th:nth-child(1) {
  width: 80px;
}

.container {
  width: 100%;
  max-width: none;
  padding: 2rem; 
}

.filters {
  margin-bottom: 20px;
  display: flex;
  gap: 10px;
  align-items: center;
}

.filter-input {
  padding: 10px;
  width: 300px;
  border: 1px solid #ccc;
  border-radius: 6px;
  font-size: 16px;
}

.advice-table {
  width: 100%;
  border-collapse: collapse;
  background: #ffffff;
  border-radius: 8px;
  overflow: hidden;
}

.advice-table th {
  background-color: #3498db;
  color: white;
  padding: 14px;
  text-align: left;
  font-weight: bold;
  cursor: pointer;
  user-select: none;
}

.advice-table th:hover {
  background-color: #2980b9;
}

.advice-table td {
  vertical-align: top;
  padding: 14px;
  border-bottom: 1px solid #ddd;
  color: #333;
  white-space: pre-wrap;
  word-break: break-word;
}

.advice-table tr:hover {
  background-color: #f1f1f1;
}

.advice-table tr:nth-child(even) {
  background-color: #f9f9f9;
}

.advice-table th:nth-child(1) { width: 10%; }
.advice-table th:nth-child(2) { width: 15%; }
.advice-table th:nth-child(3) { width: 50%; min-width: 300px; }
.advice-table th:nth-child(4) { width: 25%; }

</style>