// pages/index.js
'use client'

import { useMsal, AuthenticatedTemplate, UnauthenticatedTemplate } from "@azure/msal-react";
// import { authScopes } from "./authConfig"
import { useEffect, useState } from "react";
import Layout from "./components/Layout";
import Banner from "./components/Banner/Banner";
import ProductList from "./components/ProductList/ProductList";

export default function App() {
    const { instance, accounts } = useMsal();
    const [accountDetails, setAccountDetails] = useState(null);

    if (accounts.length > 0) {
        console.log('accounts', accounts)
    }

    // function handleLogin() {
    //     console.log('accounts', instance)
    //     instance.loginPopup(authScopes).then(response => {
    //         console.log("login successful!", response);

    //         instance.setActiveAccount(response.account);
    //     }).catch(e => {
    //         console.log(e);
    //     });
    // }

    // function handleLogout() {
    //     instance.logoutPopup(authScopes).then(response => {

    //     }).catch(e => {
    //         console.log(e);
    //     });
    // }

    return (
        <center>
            {/* <h1>Please SUBSCRIBE! </h1>
            <AuthenticatedTemplate>
              <h6>logged in!</h6>
              {accountDetails && (
                <center>
                  Name: {accountDetails.name}
                </center>
              )}
              <button onClick={() => handleLogout()}>Logout</button >
            </AuthenticatedTemplate>
            <UnauthenticatedTemplate>
                <p>Please log in</p>

                <button onClick={() => handleLogin()}>Login</button >
            </UnauthenticatedTemplate> */}
            <Layout>
                <Banner/>
                <ProductList/>
            </Layout>
        </center>
    );
}