<script setup lang="ts">
import { onMounted, ref } from 'vue';
import { getMonaco } from '../utils/monaco';
import type { editor } from 'monaco-editor';


const emit = defineEmits<{
  (event: 'mount', val: editor.IStandaloneCodeEditor): void;
}>();

const aRef = ref();
let a: editor.IStandaloneCodeEditor

onMounted(async () => {
  console.log(aRef.value, 'aRef')

  const monaco = await getMonaco()

  a = monaco.editor.create(aRef.value, {
    value: `SELECT d.name AS department_name, AVG(e.salary) AS average_salary,
    COUNT(DISTINCT ep.project_id) AS total_projects,
    SUM(p.budget) AS total_budget
FROM 
    departments d
JOIN 
    employees e ON d.id = e.department_id
LEFT JOIN 
    employee_projects ep ON e.id = ep.employee_id
LEFT JOIN 
    projects p ON ep.project_id = p.id
GROUP BY 
    d.id, d.name
HAVING 
    AVG(e.salary) > 50000
ORDER BY 
    average_salary DESC;
`,
    language: 'sql'
  })

  emit('mount', a)
})


const handleC = () => {
  console.log('handleC')
}
</script>

<template>
  <section style="width: 100vw; height: 300px;">
    <div ref="aRef" style="height: 100%;"></div>
  </section>
  <button @click="handleC">aaa</button>
</template>

<style scoped></style>
