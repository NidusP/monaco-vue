<script setup lang="ts">
import Editor from './Editor';

const val = `WITH RankedEmployees AS (
    SELECT 
        e.employee_id,
        e.first_name,
        e.last_name,
        d.department_name,
        e.salary,
        RANK() OVER (PARTITION BY e.department_id ORDER BY e.salary DESC) AS salary_rank
    FROM 
        employees e
    JOIN 
        departments d ON e.department_id = d.department_id
)
SELECT 
    employee_id,
    first_name,
    last_name,
    department_name,
    salary
FROM 
    RankedEmployees
WHERE 
    salary_rank = 1
ORDER BY 
    department_name ASC, 
    salary DESC;`
</script>

<template>
  Editor
  <Editor languages="sql" :options="{}" :default-value="val" />
</template>

<style scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}

.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}

.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
