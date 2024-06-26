import { useContext, useEffect } from "react";
import AuthContext from "../context/AuthContext";

const ProfilePage = () => {
    const { user } = useContext(AuthContext);

    useEffect(() => {
      console.log(JSON.stringify(user, null, 2));
    }, [user]);

  return (
    <section className="row">
    <article className="col">
    <div className="card mb-3" style={{ maxWidth: 700 }}>
          <div className="row g-0">
            <div className="col-md-4">
              <img
                src={user.image}
                className="img-fluid rounded-start"
                alt={user.user_name}
              />
            </div>
            <div className="col-md-8">
              <div className="card-body">
                <h5 className="card-title">{user.user_name}</h5>
                <p className="card-text">{user.id}</p>
                <p className="card-text">
                  <small className="text-body-secondary">
                    Last updated 3 mins ago
                  </small>
                </p>
              </div>
            </div>
          </div>
        </div>


    </article>
    </section>
  );
};

export default ProfilePage