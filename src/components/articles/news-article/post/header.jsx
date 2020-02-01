import React from 'react'
import TeamInfo from '../../elements/teamInfo'
import PostData from '../../elements/postData'

const Header = (props) => {
 const { date, author } = props;

 const teamInfo = (team) => team && <TeamInfo team={team} />
 const postData = (date, author) => <PostData date={date} author={author} />
 return (
  <div>
   {teamInfo(props.teamData)}
   {postData(props.date, props.author)}
  </div>
 )
}
export default Header;