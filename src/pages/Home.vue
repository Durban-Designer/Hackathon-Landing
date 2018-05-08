<template>
  <div class="main">
    <h1>
      Hosted by Woz U Alumni, Screen Art Studios NEEDS your help in developing
      the next greatest Plugin for the Mystic Marketplace.
    </h1>
    <h2>What is a Hackathon?/What is this Hackathon about?</h2>
    <p>
      In the context of a hackathon, the word "hack" is used to describe how
      multiple technologies can be used together in a new and innovative way.
      Participants will work in teams to balance out skill levels and will be
      tasked with planning, pitching, and once given approval developing their own
      Plugin to place on the Mystic Marketplace.
    </p>
    <h2>What is Mystic CRM and the Mystic Marketplace?</h2>
    <p>
      Mystic CRM is Screen Art Studios take on a CRM “customer relationship management”,
      this software will be used by companies to manage customer interactions and sales. It
      handles lead tracking, marketing campaigns, analytics, and much more.
      <span class="bold">Screen Art Studios is finalizing production of Mystic CRM but we need your help!</span>
      Mystic CRM is being developed for small to mid sized businesses with an
      emphasis on simplicity and user experience. Within the Mystic app,
      clients have access to the Mystic Marketplace where the user can purchase
      plugins for additional functionality.  For example, a user may need a
      plugin for internal messaging or survey generation. Participants in this
      hackathon will have the opportunity to create a plugin for the Mystic Marketplace;
      hopefully your inovative ideas will produce a plugin that companies everyhwere find invaluable!
    </p>
    <h3>Read on for the benefits of attending our hackathon!</h3>
    <h4>Whats in it for you?</h4>
    <ul>
      <li>Spend 12 hours of hands-on coding and learning with your local tech community</li>
      <li>The opportunity to solve real world problems in unique ways </li>
      <li>
        The chance to place your plugin in the Mystic Marketplace. Your work will
        be in an actual application that is on the market, take that to your next job interview!
      </li>
      <li>You will utilize your GitHub to push commits to the repositories so employers can see your contribution in detail. </li>
      <li>Hiring opportunities! Screen Art Studios is always on the lookout for rising talent to recruit for their in-house development teams.</li>
      <li>But wait, there’s more! Hackathon winners will receive a 5k Scholarship to Woz U (that is transferable) and each participant will also receive a $1500 scholarship.</li>
    </ul>
    <h2 v-on:click="$push('/register')" class="linkRegister">Register Today!</h2>
    <p>
      As much as we would love to host all of the Phoenix Valley, our space can
      only support a limited number of participants. <span v-on:click="$push('/register')" class="linkRegisterInline">Register today</span> to reserve
      your spot and please email me at <span class="email" href="mailto:royce.birnbaum@gmail.com">royce.birnbaum@gmail.com</span>
      if you have any questions!
    </p>
    <h2>Logistics</h2>
    <p>
      <h4>Date:</h4>Saturday, June 2nd, 2018<br/>
      <h4>Time:</h4>8AM-10PM<br/>
      <h4>Location: Screen Art Studios Headquarters;</h4>318 N 15th St. Phoenix, AZ 85006<br/>
    </p>
    <h4>Schedule;<br/>Saturday</h4>
    <p>
      8:00 AM - Check In / Breakfast social<br/>
      9:00 AM - Hackathon Brief<br/>
      9:45 AM - Teams Assigned & Plugin Planning<br/>
      10:30 AM - Hackathon Begins<br/>
      12:00 PM - Lunch Buffet is opened<br/>
      6:00 PM - Dinner Buffet is opened<br/>
      9:00 PM - Hackathon Ends<br/>
      9:30 PM - Winners Announced<br/>
    </p>
    <h4 href="https://woz-u.com/">Sponsored By Woz U</h4>
    <img/>
    <!-- Put woz u logo here when avery gets back with nice one-->
  </div>
</template>

<script>
export default {
  name: 'home'
}
</script>

<style scoped lang="less">
  .main {
  }
</style>
