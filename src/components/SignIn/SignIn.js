import React from "react";

// in progress
const SignIn = () => {
    return (
        <>
            <article class="br2 ba dark-gray b--black-10 mv4 w-100 w-50-m w-50-l center">
                <main class="pa4 white-80">
                    <form class="measure">
                        <fieldset id="sign_up" class="ba b--transparent ph0 mh0">
                            <legend class="f4 fw6 ph0 mh0">Sign In</legend>
                            <div class="mt3">
                                <label class="db fw6 lh-copy f6" for="email-address">Email</label>
                                <input class="pa2 input-reset ba bg-transparent hover-bg-near-black hover-white w-100" type="email" name="email-address"  id="email-address" />
                            </div>
                            <div class="mv3">
                                <label class="db fw6 lh-copy f6" for="password">Password</label>
                                <input class="b pa2 input-reset ba bg-transparent hover-bg-near-black hover-white w-100" type="password" name="password"  id="password"/>
                            </div>
                            <label class="pa0 ma0 lh-copy f6 pointer"><input type="checkbox" /> Remember me</label>
                        </fieldset>
                        <div class="">
                            <input class="b ph3 pv2 input-reset ba white b--white bg-transparent grow pointer f6 dib" type="submit" value="Sign in" />
                        </div>
                        <div class="lh-copy mt3">
                            <a href="#0" class="f6 link dim white db">Register</a>
                        </div>
                    </form>
                </main>
            </article>
        </>
    );
}

export default SignIn;