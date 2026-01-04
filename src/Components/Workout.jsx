import React from 'react'

const Workout = () => {
  return (
    <section className="workout_session">
      <div className="wrapper">
        <h1>TOP WORKOUT SESSION</h1>
        <p>
          Discover our premium workout sessions designed to help you achieve your fitness goals. Our expert trainers guide you through personalized routines that build strength, endurance, and confidence.
        </p>
        <img src="/img5.jpg" alt="workout" />
      </div>
      <div className="wrapper">
        <h1>FEATURED BOOTCAMPS</h1>
        <p>
          Join our intensive bootcamp programs that combine high-energy workouts with expert guidance. Whether you're a beginner or advanced athlete, our bootcamps are designed to challenge and transform your body.
        </p>
        <div className="bootcamps">
          <div>
            <h4>HIIT Bootcamp - Burn Fat Fast</h4>
            <p>
              Experience the ultimate fat-burning workout with our High-Intensity Interval Training program. Short bursts of intense exercise followed by recovery periods maximize calorie burn and improve cardiovascular fitness.
            </p>
          </div>
          <div>
            <h4>Strength Training Bootcamp - Build Muscle</h4>
            <p>
              Build powerful muscles and increase your strength with our comprehensive weight training program. Learn proper form and techniques to maximize muscle growth and overall body composition.
            </p>
          </div>
          <div>
            <h4>Yoga & Flexibility Bootcamp - Find Balance</h4>
            <p>
              Improve your flexibility, balance, and mental well-being with our yoga-focused bootcamp. Perfect for stress relief and enhancing overall body awareness and posture.
            </p>
          </div>
          <div>
            <h4>Cardio Blast Bootcamp - Boost Endurance</h4>
            <p>
              Elevate your heart rate and build endurance with our dynamic cardio bootcamp. Combining various cardio exercises to improve heart health and burn calories effectively.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Workout
