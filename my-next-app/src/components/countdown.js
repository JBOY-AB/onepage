import Image from "next/head";

const Countdown = () => {
  
        // Set the date we're counting down to
        var countDownDate = new Date("Nov 31, 2024 23:59:59").getTime();

        // Update the count down every 1 second
        var x = setInterval(function () {

            // Get today's date and time
            var now = new Date().getTime();

            // Find the distance between now and the countdown date
            var distance = countDownDate - now;

            // Time calculations for days, hours, minutes and seconds
            var days = Math.floor(distance / (1000 * 60 * 60 * 24));
            var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
            var seconds = Math.floor((distance % (1000 * 60)) / 1000);

            // Output the result in an element with id="demo"
            document.getElementById("Days").innerHTML = days;
            document.getElementById("Hours").innerHTML = hours;
            document.getElementById("Minutes").innerHTML = minutes;
            document.getElementById("seconds").innerHTML = seconds;

            // If the count down is over, write some text 
            if (distance <= 0) {
                clearInterval(x);
                document.getElementById("countdown").innerHTML = "EXPIRED";
            }
        }, 1000);
  return (

    <section className="coundown-section">
      <div className="container">
        <h1>Countdown to Audition</h1>
        <div className="countdown">
          <div className="time">
            <span className="number" id="Days">
              02
            </span>
            <div className="dash">___</div>
            <span className="label">Days</span>
          </div>
          <div className="colon">:</div>
          <div className="time">
            <span className="number" id="Hours">
              02
            </span>
            <div className="dash">___</div>
            <span className="label">Hours</span>
          </div>
          <div className="colon">:</div>
          <div className="time">
            <span className="number" id="Minutes">
              08
            </span>
            <div className="dash">___</div>
            <span className="label">Minutes</span>
          </div>
          <div className="colon">:</div>
          <div className="time">
            <span className="number" id="seconds">
              06
            </span>
            <div className="dash">___</div>
            <span className="label">seconds</span>
          </div>
        </div>
      </div>
      <div className="border-img">
        <img
          id="topgrey"
          src="/shape-top-grey-80.png"
          height="100px"
          alt="topgerycolor"
        />
      </div>
    </section>


  );

}
export default Countdown;