import CustomClock from "./COMPONENTS/CUSTOM_CLOCKS";
import LocalClock from "./COMPONENTS/LOCAL_CLOCK";
import Login from "./COMPONENTS/LOGIN";
import useClock from "./HOOKS/CLOCK_HOOK/useClock";
import Axios from "axios";
import { useEffect, useState } from "react";
import { addMinutes } from "date-fns";
const App = () => {
  const [userData, setUserData] = useState();
  const [forLoad, setForLoad] = useState(false);
  const localClock = useClock();
  const currentDate = addMinutes(localClock.Date, localClock.Offset);
  const loginHundeler = (fromData) => {
    Axios.post("http://localhost:3000/api/login", fromData)
      .then((res) => {
        if (res.data.result) {
          setUserData(res.data.result);
          localStorage.setItem("user_name", res.data.result.name);
          localStorage.setItem("user_id", res.data.result._id);
          console.log(res.data.message);
        } else {
          console.log(res.data.message);
        }
      })
      .catch((err) => console.log(err));
  };
  const registerHundeler = (fromData) => {
    if (fromData.password === fromData.cpassword) {
      const data = {
        name: fromData.name,
        password: fromData.password,
      };
      Axios.post("http://localhost:3000/api/register", data)
        .then((res) => {
          localStorage.setItem("user_name", res.data.result.name);
          localStorage.setItem("user_id", res.data.result._id);
          setLogin(true);
        })
        .catch((error) => console.log(error));
    } else {
      console.log("Oppss !!! ..Password Not Confromed ");
    }
  };
  const EditProfile = (state) => {
    try {
      const id = localStorage.getItem("user_id");
      if (id) {
        Axios.put(`http://localhost:3000/api/register/${id}`, state).then(
          (res) => {
            if (res.data.result) {
              localStorage.setItem("user_name", res.data.result.name);
              localStorage.setItem("user_id", res.data.result._id);

              setUserData(res.data.result);
              setForLoad(!forLoad);
            } else {
              console.log(res.data.message);
            }
          }
        );
      }
    } catch (error) {
      console.log(error);
    }
  };
  const logouthundeler = () => {
    localStorage.clear();
    setUserData({});
    setForLoad(!forLoad);
  };
  const createClock = (data) => {
    const id = localStorage.getItem("user_id");
    if (id) {
      Axios.post(`http://localhost:3000/api/clock/${id}`, data).then((res) => {
        console.log(res.data.result);
        setForLoad(!forLoad);
      });
    } else {
      console.log("not logged");
    }
  };
  const updateclock = (data) => {
    console.log(data);
  };
  const CustomClockEditHundeler = ({ state: data, clockId }) => {
    const id = localStorage.getItem("user_id");
    if (clockId) {
      Axios.put(
        `http://localhost:3000/api/clock/?uid=${id}&cid=${clockId}`,
        data
      ).then((res) => {
        console.log(res.data.result);
        setForLoad(!forLoad);
      });
    } else {
      console.log("not logged");
    }
  };
  const CustomClockDelete = (clockId) => {
    const id = localStorage.getItem("user_id");
    if (id) {
      Axios.delete(`http://localhost:3000/api/clock/?uid=${id}&cid=${clockId}`)
        .then((res) => {
          console.log(res.data.result);
          setForLoad(!forLoad);
        })
        .catch((err) => console.log(err));
    } else {
      console.log("not logged");
    }
  };
  const CreateEvent = ({ state: data, clockId }) => {
    data.clockId = clockId;
    const id = localStorage.getItem("user_id");
    if (id) {
      Axios.post(`http://localhost:3000/api/event/${id}`, data)
        .then((res) => {
          console.log(res.data.result);
          setForLoad(!forLoad);
        })
        .catch((err) => console.log(err));
    } else {
      console.log("not logged");
    }
  };
  const updateevent = ({ state: data, eventId }) => {
    try {
      const id = localStorage.getItem("user_id");
      if (id) {
        Axios.put(
          `http://localhost:3000/api/event/?uid=${id}&eid=${eventId}`,
          data
        ).then((res) => {
          console.log(res.data.result);
          setForLoad(!forLoad);
        });
      }
    } catch (error) {
      console.log(error);
    }
  };
  const deleteEvent = (eventId) => {
    try {
      const id = localStorage.getItem("user_id");
      if (id) {
        Axios.delete(
          `http://localhost:3000/api/event/?uid=${id}&eid=${eventId}`
        ).then((res) => {
          console.log(res.data.result);
          setForLoad(!forLoad);
        });
      }
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    const id = localStorage.getItem("user_id");
    if (id) {
      Axios.get(`http://localhost:3000/api/${id}`).then((res) =>
        setUserData(res.data.result)
      );
    } else {
      console.log("not logged");
    }
  }, [forLoad]);
  useEffect(() => {
    const id = localStorage.getItem("user_id");
    if (id) {
      Axios.get(`http://localhost:3000/api/${id}`).then((res) =>
        setUserData(res.data.result)
      );
    } else {
      console.log("not logged");
    }
  }, []);

  return (
    <div>
      <Login
        registerHundeler={registerHundeler}
        loginHundeler={loginHundeler}
        logouthundeler={logouthundeler}
        EditProfile={EditProfile}
      />
      <LocalClock
        clock={localClock}
        createClock={createClock}
        updateclock={updateclock}
        tittle={userData && userData.tittle}
      />
      {userData && (
        <CustomClock
          clocks={userData.clocks}
          events={userData.events}
          CustomClockEditHundeler={CustomClockEditHundeler}
          CustomClockDelete={CustomClockDelete}
          CreateEvent={CreateEvent}
          localdate={currentDate}
          updateevent={updateevent}
          deleteEvent={deleteEvent}
        />
      )}
    </div>
  );
};
export default App;
