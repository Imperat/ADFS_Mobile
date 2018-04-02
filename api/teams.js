import { settings } from '../settings';

export async function getTeams() {
  const response = await fetch(`${settings.backendURL}/logic/api/teams/`);
  const json = await response.json();
  return json || [];
}