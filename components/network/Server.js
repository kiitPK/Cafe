import React, { Component } from "react";
import { View } from "react-native";

const encodedValue = "admin";

let apiGetLogin = `http://192.168.0.100:8000/login?username=login?username=${encodedValue}&password=${encodedValue}`;

async function getLoginFromServer() {
  console.log(apiGetLogin);
  try {
    let response = await fetch(apiGetLogin);
    let responseJson = await response.json();
    console.log("+++++++++++++++" + responseJson.message);
    return responseJson;
  } catch (error) {
    console.error(error);
  }
}

export { getLoginFromServer };
