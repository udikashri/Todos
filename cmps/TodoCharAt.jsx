export class TodoCharAt extends React.Component {
    render() {
        var timeAgo = (Date.now() - this.props.todo.charAt) / 1000
        let msgSeconds
        let msgMinutes
        let minuteCount = 0
        let msgHours
        let hoursCount = 0
        let msgDays
        let daysCount = 0
          if (timeAgo < 60){
            msgSeconds = 'few seconds ago'
          }
        if (timeAgo / 60 && Math.floor((timeAgo / 60)<60) ) {
            minuteCount = Math.floor(timeAgo / 60)
            msgMinutes = minuteCount +' '+ 'minutes ago'
        }
        if (timeAgo / 60 / 60 && Math.floor((timeAgo / 60 / 24)<24)) {
            hoursCount = Math.floor(timeAgo / 60 / 60)
            msgHours = hoursCount +' '+ 'hours ago'
        }
        if (timeAgo / 60 / 60 / 24) {
            daysCount = Math.floor(timeAgo / 60 / 60 / 24)
            msgDays = daysCount +' '+ 'days ago'
        }
        return (
            <section style={{color:'gray',fontSize:12+'px', padding:2+'px'}}>
            {msgSeconds || msgMinutes || msgHours || msgDays}
            </section>
        )
    }
}