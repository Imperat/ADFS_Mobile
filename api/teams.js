export async function getTeams() {
  const response = await fetch("https://adf-saratov.ru/logic/api/teams/");
  const json = await response.json();
  return json || [];
}