import React from 'react'
import TeamInfo from './../../elements/teamInfo';

 const Header = (props) => {
  const teamInfo = (team) => team && <TeamInfo team={team} />
 return (
  <div>
   {teamInfo(props.teamData)}
  </div>
 )
}

export default Header;