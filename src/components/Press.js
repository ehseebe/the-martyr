import React from 'react';
import './Press.css';

const Press = () => {
  return (
    <section className="container-body-press">

      <div className="press__header">
      <i>
          <h1> An Interview with Robbie Ward </h1>
        </i>

        <p className="press__header--intro">Robbie Ward is an artist and animator based in Toronto. Photo booth bicycle rights post-ironic pug. Migas woke gentrify beard hashtag narwhal selvage vegan roof party poke vexillologist quinoa. Microdosing four loko pabst YOLO messenger bag selfies vape, hella jianbing PBR&B intelligentsia. Swag freegan williamsburg ennui tumeric try-hard, kickstarter tofu aesthetic. Etsy tousled kogi flexitarian forage art party tilde taiyaki thundercats pork belly salvia kinfolk.</p>
        
      </div>

      <div className="press__content">

      <img src="https://i.ibb.co/nQsSyqp/robbie-ward-0-landscape.jpg" alt="robbie-ward-0-landscape" border="0" className="press__content__img"/>

      <i><h4 className="press__content--subtitle">“If I lived in the Middle Ages, I’d be the guy making illuminated manuscripts.”</h4></i>

      </div>
    </section>
  )
}

export default Press;