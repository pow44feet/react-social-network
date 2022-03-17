const Profile = () => {
   return (
      <main className="page__main main">
         <div className="main__logo">
            <img src="https://i.pinimg.com/originals/43/88/20/438820c493dc52547d65021d418878db.jpg" alt="" />
         </div>
         <div className="main__content profile">
            <div className="profile__card">
               <div className="profile__avatar">
                  <img src="https://yt3.ggpht.com/a/AGF-l7_WrI_w5xDihSMs0IIoCOT54Xd2vxnHF1J3bQ=s900-c-k-c0xffffffff-no-rj-mo" alt="" />
               </div>
               <div className="profile__info">
                  <p className="profile__name">
                     Born
                  </p>
                  <p className="profile__sex">
                     male
                  </p>
                  <p className="profile__age">
                     26
                  </p>
                  <p className="profile__city">
                     Moscow
                  </p>
               </div>
            </div>
            <div className="profile__posts posts">
               <div className="posts__post">
                  Post 1
               </div>
               <div className="posts__post">
                  Post 2
               </div>
               <div className="posts__post">
                  Post 3
               </div>
            </div>
         </div>
      </main>
   )
}

export default Profile;