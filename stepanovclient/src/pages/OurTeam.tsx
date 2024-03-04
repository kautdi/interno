import * as React from 'react';
import { ITeam } from '../models/ITeam';
import TeamsService from '../services/teams-service';
import { useState, useEffect } from 'react';
import TeamCard from '../components/OurTeam/TeamCard';
import Banner from '../components/Banner';

export interface IOurTeamProps {}

export default function OurTeam(props: IOurTeamProps) {
  const [teams, setTeams] = useState<ITeam[]>([]);

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await TeamsService.fetchTeams();
        setTeams(response.data);
      } catch (error) {
        console.error('Error fetching teams:', error);
      }
    }

    fetchData();
  }, []); // Empty dependency array to run the effect only once

  return (
    <>
    <Banner head='Our Professional' navigate='Home / Team'/>
      <section className="teamBlock">
        <div className="team-items teamBlock__team-items">
          {teams.map((team, index) => (
            <TeamCard key={team._id} id={team._id} name={team.fio} position={team.position} img={team.img} />
          ))}
        </div>
      </section>
    </>
  );
}
