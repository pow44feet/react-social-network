import './Card.css';

const Card = () => {
   return (
      <div className="page__card card">
         <div className="card__content">
            <div className="card__avatar">
               <img src="https://mir-s3-cdn-cf.behance.net/project_modules/2800_opt_1/5693d145827621.583e7a7ec0548.jpg" alt="" />
            </div>
            <p className="card__name">
               Oleg Andrianov
            </p>
            <p className="card__activity">
               Frontend, React, Freelance
            </p>
            <button className="card__request">
               Hire!
            </button>
         </div>
      </div>
   )
}

export default Card;