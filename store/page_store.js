import { makeAutoObservable } from "mobx";
const baseUrl = "http://154.194.52.246:8000";

class pageStore {
  email = null;
  registered = false;
  logged = false;
  first_name = null;
  last_name = null;
  avatar_url = null;
  isSuperuser = false;
  isVerified = false;
  isActive = false;
  token = null;
  listening = [];
  meditation = [];
  training = [];
  liked = [];

  id = null;
  trainers = [];
  constructor() {
    makeAutoObservable(this);
  }
  registerUser = async (values) => {
    const response = await fetch(baseUrl + "/auth/register", {
      method: "POST",
      headers: {
        accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(values),
    });
    const result = await response.json();
    console.log(result);
    this.id = result.id;
    this.email = result.email;
    this.first_name = result.first_name;
    this.last_name = result.last_name;
    this.avatar_url = result.path_to_avatar;
    this.isSuperuser = result.is_superuser;
    this.isVerified = result.is_verified;
    this.isActive = result.is_active;
    this.registered = true;
  };
  login = async (values) => {
    const response = await fetch(baseUrl + "/auth/jwt/login", {
      method: "POST",
      headers: {
        accept: "application/json",
        "Content-Type": "application/x-www-form-urlencoded",
      },
      body: `grant_type=&username=${values.email.replace(
        "@",
        "%40"
      )}&password=${values.password}&scope=&client_id=&client_secret=`,
    });
    const result = await response.json();
    console.log(result);
    this.token = result.access_token;
    this.registered = true;
  };
  logout = () => {
    this.token = null;
    this.email = null;
    this.registered = false;
    this.id = null;
    this.logged = false;
    this.first_name = null;
    this.last_name = null;
    this.avatar_url = null;
    this.isSuperuser = false;
    this.isVerified = false;
    this.isActive = false;
  };
  getAllTrainers = async () => {
    const response = await fetch(
      "http://154.194.52.246:8000/api/trainers/all",
      { method: "GET", headers: { accept: "application/json" } }
    );
    const result = await response.json();
    this.trainers = result;
  };
  getAllListening = async () => {
    const response = await fetch("http://154.194.52.246:8000/api/courses/all", {
      method: "GET",
      headers: {
        accept: "application/json",
        Authorization: `Bearer ${this.token}`,
      },
    });
    const result = await response.json();
    this.listening = result.filter(
      (elem) => elem.course_type_slug == "listening"
    );
    console.log(this.listening);
  };
  getAllMeditate = async () => {
    const response = await fetch("http://154.194.52.246:8000/api/courses/all", {
      method: "GET",
      headers: {
        accept: "application/json",
        Authorization: `Bearer ${this.token}`,
      },
    });
    const result = await response.json();
    this.meditation = result.filter(
      (elem) => elem.course_type_slug == "meditation"
    );
  };
  getAllTraining = async () => {
    const response = await fetch("http://154.194.52.246:8000/api/courses/all", {
      method: "GET",
      headers: {
        accept: "application/json",
        Authorization: `Bearer ${this.token}`,
      },
    });
    const result = await response.json();
    this.training = result.filter(
      (elem) => elem.course_type_slug == "training"
    );
  };
  likeLesson = async (id) => {
    const response = await fetch(
      "http://154.194.52.246:8000/api/users/like-lessons",
      {
        method: "POST",
        headers: {
          accept: "application/json",
          "Content-Type": "application/x-www-form-urlencoded",
          Authorization: `Bearer ${this.token}`,
        },
        body: JSON.stringify({ lesson_id: id }),
      }
    );
    const result = await response.json();
    await this.getLiked();
  };
  getLiked = async () => {
    const response = await fetch(
      "http://154.194.52.246:8000/api/users/my_favorite",
      {
        method: "GET",
        headers: {
          accept: "application/json",
          Authorization: `Bearer ${this.token}`,
        },
      }
    );
    const result = await response.json();
    this.liked = result;
  };
}
export default pageStore;
