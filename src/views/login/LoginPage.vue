<!-- <script setup>

</script>

<template>
    <div class="login-page-main-outer-section">
        <div class="header-section">
            <div class="header-logo">
                <svg role="img" viewBox="0 0 78 24" aria-label="Spotify" aria-hidden="false" height="100%" data-encore-id="logoSpotify" class="Svg-sc-6c3c1v-0 fMEvxo" style="fill: white;"><title>Spotify</title><path d="M18.616 10.639c-3.77-2.297-9.99-2.509-13.59-1.388a1.077 1.077 0 0 1-1.164-.363 1.14 1.14 0 0 1-.119-1.237c.136-.262.37-.46.648-.548 4.132-1.287 11-1.038 15.342 1.605a1.138 1.138 0 0 1 .099 1.863 1.081 1.081 0 0 1-.813.213c-.142-.02-.28-.07-.403-.145Zm-.124 3.402a.915.915 0 0 1-.563.42.894.894 0 0 1-.69-.112c-3.144-1.983-7.937-2.557-11.657-1.398a.898.898 0 0 1-.971-.303.952.952 0 0 1-.098-1.03.929.929 0 0 1 .54-.458c4.248-1.323 9.53-.682 13.14 1.595a.95.95 0 0 1 .3 1.286Zm-1.43 3.267a.73.73 0 0 1-.45.338.712.712 0 0 1-.553-.089c-2.748-1.722-6.204-2.111-10.276-1.156a.718.718 0 0 1-.758-.298.745.745 0 0 1-.115-.265.757.757 0 0 1 .092-.563.737.737 0 0 1 .457-.333c4.455-1.045 8.277-.595 11.361 1.338a.762.762 0 0 1 .241 1.028ZM11.696 0C5.237 0 0 5.373 0 12c0 6.628 5.236 12 11.697 12 6.46 0 11.698-5.372 11.698-12 0-6.627-5.238-12-11.699-12h.001Zm20.126 11.078c-2.019-.494-2.379-.84-2.379-1.57 0-.688.633-1.151 1.572-1.151.91 0 1.814.352 2.76 1.076a.131.131 0 0 0 .187-.03l.987-1.426a.139.139 0 0 0-.025-.185c-1.127-.928-2.396-1.378-3.88-1.378-2.18 0-3.703 1.342-3.703 3.263 0 2.06 1.315 2.788 3.585 3.352 1.932.457 2.258.84 2.258 1.524 0 .757-.659 1.229-1.72 1.229-1.18 0-2.141-.408-3.216-1.364a.13.13 0 0 0-.188.016l-1.106 1.35a.137.137 0 0 0 .013.188c1.252 1.147 2.79 1.752 4.451 1.752 2.35 0 3.869-1.317 3.869-3.356 0-1.723-1.003-2.676-3.465-3.29Zm10.487 2.31c0 1.454-.874 2.47-2.125 2.47-1.235 0-2.169-1.061-2.169-2.47 0-1.41.933-2.47 2.17-2.47 1.23 0 2.124 1.038 2.124 2.47Zm-1.706-4.354c-1.018 0-1.854.412-2.543 1.256v-.95a.136.136 0 0 0-.038-.095.132.132 0 0 0-.093-.04h-1.81a.131.131 0 0 0-.093.04.136.136 0 0 0-.039.096v10.546c0 .076.06.137.133.137h1.809a.132.132 0 0 0 .093-.041.136.136 0 0 0 .038-.096v-3.329c.69.794 1.525 1.18 2.543 1.18 1.893 0 3.808-1.494 3.808-4.35 0-2.858-1.915-4.354-3.808-4.354Zm8.72 6.839c-1.297 0-2.274-1.068-2.274-2.486 0-1.422.943-2.455 2.244-2.455 1.305 0 2.288 1.069 2.288 2.487 0 1.422-.949 2.454-2.258 2.454Zm0-6.838c-2.438 0-4.347 1.926-4.347 4.383 0 2.432 1.896 4.338 4.317 4.338 2.445 0 4.36-1.92 4.36-4.369 0-2.44-1.901-4.353-4.33-4.353Zm9.535.17h-1.99V7.117a.136.136 0 0 0-.08-.126.13.13 0 0 0-.052-.01h-1.809a.133.133 0 0 0-.093.04.136.136 0 0 0-.038.095v2.087h-.87a.131.131 0 0 0-.122.085.139.139 0 0 0-.01.052v1.595c0 .074.06.135.132.135h.87v4.126c0 1.667.809 2.513 2.404 2.513.648 0 1.186-.138 1.694-.434a.135.135 0 0 0 .067-.117V15.64a.137.137 0 0 0-.063-.115.13.13 0 0 0-.129-.006c-.349.18-.685.263-1.061.263-.58 0-.84-.271-.84-.876V11.07h1.99a.13.13 0 0 0 .094-.04.136.136 0 0 0 .039-.096V9.339a.137.137 0 0 0-.039-.096.132.132 0 0 0-.094-.04v.001Zm6.934.007v-.255c0-.755.281-1.092.914-1.092.376 0 .68.077 1.019.194a.13.13 0 0 0 .118-.02.135.135 0 0 0 .056-.11V6.365a.137.137 0 0 0-.026-.081.133.133 0 0 0-.068-.05 4.852 4.852 0 0 0-1.502-.22c-1.67 0-2.554.965-2.554 2.788v.393h-.87a.132.132 0 0 0-.093.04.136.136 0 0 0-.038.096v1.603c0 .075.059.136.132.136h.87v6.364c0 .075.058.135.131.135h1.809c.072 0 .131-.06.131-.135V11.07h1.69l2.586 6.362c-.294.669-.583.802-.977.802-.319 0-.654-.098-.998-.29a.133.133 0 0 0-.105-.01.135.135 0 0 0-.078.072l-.612 1.38a.137.137 0 0 0 .056.175 3.733 3.733 0 0 0 1.932.508c1.334 0 2.073-.638 2.724-2.355l3.137-8.317a.14.14 0 0 0-.014-.126.131.131 0 0 0-.108-.06h-1.883a.132.132 0 0 0-.126.092l-1.928 5.651L69.006 9.3a.133.133 0 0 0-.124-.088h-3.09v.001Zm-4.02-.008h-1.809a.132.132 0 0 0-.093.041.136.136 0 0 0-.038.096v8.094c0 .075.06.135.132.135h1.809c.072 0 .131-.06.131-.135V9.34a.136.136 0 0 0-.038-.096.133.133 0 0 0-.094-.04Zm-.896-3.685a1.295 1.295 0 0 0-.919.393c-.243.25-.379.586-.377.937a1.342 1.342 0 0 0 .377.938 1.304 1.304 0 0 0 .92.393c.346-.002.677-.143.92-.393s.379-.587.377-.938c0-.735-.581-1.33-1.296-1.33h-.002Zm15.918 4.49h-.331v.434h.331c.165 0 .264-.083.264-.216 0-.142-.099-.217-.264-.217Zm.215.619.36.517h-.304l-.323-.474h-.279v.474h-.254v-1.37h.595c.31 0 .515.163.515.436a.412.412 0 0 1-.31.417Zm-.282-1.31c-.652 0-1.146.532-1.146 1.183 0 .65.49 1.175 1.139 1.175.652 0 1.147-.532 1.147-1.183 0-.65-.492-1.174-1.14-1.174Zm-.007 2.488a1.259 1.259 0 0 1-.904-.384 1.296 1.296 0 0 1-.368-.92c0-.717.563-1.314 1.279-1.314a1.259 1.259 0 0 1 .903.384 1.295 1.295 0 0 1 .369.921c0 .717-.563 1.314-1.279 1.314Z"></path></svg>
            </div>
        </div>
        <div class="login-page-middle-section">
            <div class="login-inner-section">
               <div class="login-container">
                <h1 class="header-text" data-encore-id="type">Log in to Spotify</h1>
                <ul class="login-list-section">
                    <li class="login-inner-list">
                        <button data-testid="google-login" class="Button-sc-y0gtbx-0 jJyUnh sc-jIRcFI kytqHe" data-encore-id="buttonSecondary"><span name="new-google-icon" class="sc-hhOBVt iuDXBJ"></span><span class="Type__TypeElement-sc-goli3j-0 kwLSIj sc-eDvSVe sc-hBxehG sc-fEXmlR itlAHd gjBoil eTMXUY" data-encore-id="type">Continue with Google</span></button>
                    </li>
                    <li class="sc-ezOQGI iABXsu">
                        <button data-testid="facebook-login" class="Button-sc-y0gtbx-0 jJyUnh sc-jIRcFI kytqHe" data-encore-id="buttonSecondary">
                            <span name="new-facebook-icon" class="sc-hhOBVt gsbglU"></span>
                            <span class="Type__TypeElement-sc-goli3j-0 kwLSIj sc-eDvSVe sc-hBxehG sc-fEXmlR itlAHd gjBoil eTMXUY" data-encore-id="type">Continue with Facebook</span>
                        </button>
                    </li>
                    <li class="sc-ezOQGI iABXsu"><button data-testid="apple-login" class="Button-sc-y0gtbx-0 jJyUnh sc-jIRcFI kytqHe" data-encore-id="buttonSecondary"><span name="new-apple-icon" class="sc-hhOBVt AmONz"></span><span class="Type__TypeElement-sc-goli3j-0 kwLSIj sc-eDvSVe sc-hBxehG sc-fEXmlR itlAHd gjBoil eTMXUY" data-encore-id="type">Continue with Apple</span></button></li>
                    <li class="sc-ezOQGI iABXsu"><button data-testid="phone-login" class="Button-sc-y0gtbx-0 jJyUnh sc-jIRcFI kytqHe" data-encore-id="buttonSecondary"><span class="Type__TypeElement-sc-goli3j-0 kwLSIj sc-eDvSVe sc-hBxehG sc-fEXmlR itlAHd gjBoil eTMXUY" data-encore-id="type">Continue with phone number</span></button></li>
                </ul>
                <hr role="presentation" class="sc-iBYQkv OEwmv">
                <div data-testid="login-form" class="Group-sc-u9bcx5-0 kWRxyd sc-bjfHbI bGYVrs" data-encore-id="formGroup"><div class="Group-sc-u9bcx5-0 kWRxyd sc-idXgbr sc-dIfARi eoRzGN eokstg" data-encore-id="formGroup"><div class="LabelGroup-sc-1ibddrg-0 duTSXm"><label for="login-username" class="Label-sc-1c0cv3r-0 cwWhaQ"><span class="LabelInner-sc-19pye2k-0 LnTCl">Email or username</span></label></div><input aria-invalid="true" id="login-username" type="text" placeholder="Email or username" data-testid="login-username" autocapitalize="off" autocomplete="username" spellcheck="false" autocorrect="off" aria-describedby="username-error" data-encore-id="formInput" class="Input-sc-1gbx9xe-0 eRUvFB" value=""><div data-testid="username-error" id="username-error" data-encore-id="formHelpText" class="Help-sc-1xezfve-0 fXKibU"><svg role="img" height="16" width="16" aria-hidden="true" aria-label="Error:" class="Svg-sc-ytk21e-0 uPxdw IconExclamationAltActiveForText-sc-1qghvhz-0 eHCaRV" viewBox="0 0 16 16" data-encore-id="icon"><path d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8zm7.25-5v7h1.5V3h-1.5zm0 8.526v1.5h1.5v-1.5h-1.5z"></path></svg><span class="Text-sc-g5kv67-0 jYLjty"><p class="Type__TypeElement-sc-goli3j-0 gkqrGP sc-bqWxrE iJlXnD" data-encore-id="type">Please enter your Spotify username or email address.</p></span></div></div><div class="Group-sc-u9bcx5-0 kWRxyd sc-idXgbr sc-dIfARi eoRzGN eokstg" data-encore-id="formGroup"><div class="LabelGroup-sc-1ibddrg-0 duTSXm"><label for="login-password" class="Label-sc-1c0cv3r-0 cwWhaQ"><span class="LabelInner-sc-19pye2k-0 LnTCl">Password</span></label></div><div data-encore-id="formInputIcon" class="InputContainer-sc-a5ofs0-0 btxxcI"><input aria-invalid="false" id="login-password" type="password" placeholder="Password" data-testid="login-password" autocomplete="current-password" spellcheck="false" autocorrect="off" aria-describedby="password-error" data-encore-id="formInput" class="Input-sc-1gbx9xe-0 fOpTaL"><div class="IconContainer-sc-1oa4n9m-0 huaAbB"><button data-testid="login-password-preview" aria-label="show password" data-encore-id="buttonTertiary" class="Button-sc-1dqy6lx-0 eMFxEP"><span aria-hidden="true" class="IconWrapper__Wrapper-sc-16usrgb-0 eJHlti"><svg role="img" height="24" width="24" aria-hidden="true" viewBox="0 0 24 24" data-encore-id="icon" class="Svg-sc-ytk21e-0 uPxdw"><path d="M22.207 2.824a1 1 0 1 0-1.414-1.414L17.15 5.053C15.621 4.363 13.92 4 12 4 8.671 4 5.996 5.091 3.742 7.089c-.896.794-2.3 2.353-3.381 4.453L.125 12l.236.458c1.082 2.1 2.485 3.659 3.381 4.453.278.246.562.479.853.697L1.793 20.41a1 1 0 1 0 1.414 1.414l3.126-3.126.003.002 1.503-1.503-.004-.001 1.73-1.73.004.001 1.567-1.567h-.004l4.68-4.681.001.004 1.595-1.595-.002-.003.11-.109.002.002 1.444-1.444-.003-.002 3.248-3.248zM14.884 7.32l-5.57 5.57A4.035 4.035 0 0 1 8.113 10c0-2.23 1.761-4 3.886-4 1.137 0 2.17.506 2.884 1.319zM7.9 14.304l-1.873 1.873a11.319 11.319 0 0 1-.957-.763C4.396 14.818 3.3 13.621 2.387 12c.913-1.62 2.01-2.818 2.683-3.414.519-.46 1.061-.863 1.634-1.204A6.073 6.073 0 0 0 6.113 10c0 1.681.682 3.21 1.786 4.304zm11.568-5.2 1.415-1.415a16.503 16.503 0 0 1 2.756 3.853l.236.458-.236.458c-1.082 2.1-2.485 3.659-3.381 4.453C18.004 18.908 15.328 20 12 20a13.22 13.22 0 0 1-3.08-.348l1.726-1.726c.435.05.886.074 1.354.074 2.833 0 5.037-.907 6.931-2.586.674-.596 1.77-1.793 2.683-3.414a14.515 14.515 0 0 0-2.146-2.896z"></path><path d="M17.843 10.729c-.328 2.755-2.494 4.956-5.24 5.24l5.24-5.24z"></path></svg></span></button></div></div></div><div class="sc-dmctIk sc-kgTSHT EYhyD zySKg"><div class="Group-sc-u9bcx5-0 kWRxyd sc-idXgbr sc-dIfARi sc-hHTYSt eoRzGN eokstg IkglP" data-encore-id="formGroup"><label data-encore-id="formToggle" class="Checkbox-sc-jka46s-0 bqRVOd"><input type="checkbox" id="login-remember" name="remember" data-testid="login-remember" data-encore-id="visuallyHidden" class="VisuallyHidden__VisuallyHiddenElement-sc-17bibe8-0 eUaqVT" checked=""><span class="Wrapper-sc-16y5c87-0 imHfsA"><span class="Indicator-sc-acu4qz-0 GuRdu"></span></span><span class="Label-sc-1sbwovc-0 kGXnFq"><p class="Type__TypeElement-sc-goli3j-0 gkqrGP sc-bqWxrE sc-ksBlkl iJlXnD eEfliY" data-encore-id="type">Remember me</p></span></label></div></div><div class="sc-bBABsx sc-iveFHk hqvHas izCaol"><button id="login-button" data-testid="login-button" data-encore-id="buttonPrimary" class="Button-sc-qlcn5g-0 otMlU" style="width: 100%;"><span class="ButtonInner-sc-14ud5tc-0 cJdEzG encore-bright-accent-set"><span class="Type__TypeElement-sc-goli3j-0 cOJqPq sc-eDvSVe sc-jSUZER itlAHd dbTuyj" data-encore-id="type">Log In</span></span><span class="ButtonFocus-sc-2hq6ey-0 csWrjt"></span></button></div><div class="sc-dmctIk sc-kgTSHT sc-fLcnxK EYhyD zySKg PPwIs"><a href="#" id="reset-password-link" data-testid="reset-password-link" data-encore-id="textLink" class="Link-sc-k8gsk-0 cIqjxr"><p class="Type__TypeElement-sc-goli3j-0 eRYMpa sc-bqWxrE iJlXnD" data-encore-id="type">Forgot your password?</p></a></div></div>
               </div> 
            </div>
        </div>
    </div>
</template>

<style scoped>
.login-page-main-outer-section {
    display: flex;
    flex-direction: column;
    height: 100vh;
    overflow-x: hidden;
    background-color: black;
}
.header-section {
    padding: 32px 0px 32px 51px;
    margin-bottom: 0px;
}
.header-logo {
    height: 36px;
    text-align: left;
}
.login-page-middle-section {
    flex: 3 1 0%;
    display: flex;
    -webkit-box-pack: center;
    justify-content: center;
    padding: 32px;
    background: linear-gradient(rgba(255, 255, 255, 0.1) 0%, rgb(0, 0, 0) 100%);
}
.login-inner-section {
    max-width: 734px;
    width: 100%;
}
.login-container {
    background-color: black;
    color: white;
    row-gap: normal;
    border-radius: 8px;
}
.header-text {
    text-align: center;
    /* margin: 80px 0px 48px; */
    padding: 80px 0px 48px;
    font-size: 3rem;

    box-sizing: border-box;
    -webkit-tap-highlight-color: transparent;
    margin-block: 0px;
    font-size: 2rem;
    font-weight: 700;
    font-family: var(--font-family,CircularSpTitle,CircularSpTitle-Tall,CircularSp-Arab,CircularSp-Hebr,CircularSp-Cyrl,CircularSp-Grek,CircularSp-Deva,var(--fallback-fonts,sans-serif));
    color: inherit;
}
.login-list-section {
    width: 324px;
    margin: 0px auto;
    row-gap: normal;

    list-style: none;
    /* margin: 0px; */
    padding: 0px;
    text-indent: 0px;
    display: flex;
    flex-direction: column;
}
.login-inner-list {
    list-style: none;
    margin: 0px;
    padding: 0px;
    text-indent: 0px;
}
.kytqHe {
    margin-bottom: 8px;
}
.jJyUnh {
    box-sizing: border-box;
    -webkit-tap-highlight-color: transparent;
    font-size: 1rem;
    font-weight: 700;
    font-family: var(--font-family,CircularSp,CircularSp-Arab,CircularSp-Hebr,CircularSp-Cyrl,CircularSp-Grek,CircularSp-Deva,var(--fallback-fonts,sans-serif));
    background-color: transparent;
    border-radius: 500px;
    text-align: center;
    text-decoration: none;
    text-transform: none;
    touch-action: manipulation;
    transition-duration: 33ms;
    transition-property: background-color, border-color, color, box-shadow, filter, transform;
    user-select: none;
    vertical-align: middle;
    transform: translate3d(0px, 0px, 0px);
    padding-block: 7px;
    padding-inline: 31px;
    position: relative;
    border: 1px solid #878787;
    color: var(--text-base,#000000);
    min-block-size: 48px;
    display: inline-flex;
    -webkit-box-align: center;
    align-items: center;
    -webkit-box-pack: center;
    justify-content: center;
    inline-size: 100%;
}
.iuDXBJ {
    background: url(https://accounts.scdn.co/sso/images/new-google-icon.72fd940a229bc94cf9484a3320b3dccb.svg) center center no-repeat;
    width: 1.5rem;
    height: 1.5rem;
}
.eTMXUY {
    font-size: 1rem;
    color: rgba(255, 255, 255, 0.9);
    text-transform: capitalize;
    letter-spacing: normal;
    margin: auto;
}
.gsbglU {
    background: url(https://accounts.scdn.co/sso/images/new-facebook-icon.eae8e1b6256f7ccf01cf81913254e70b.svg) center center no-repeat;
    width: 1.5rem;
    height: 1.5rem;
}
.AmONz {
    background: url(https://accounts.scdn.co/sso/images/new-apple-icon.e356139ea90852da2e60f1ff738f3cbb.svg) center center no-repeat;
    width: 1.5rem;
    height: 1.5rem;
}
.jJyUnh::after {
    display: block;
    position: absolute;
    pointer-events: none;
    transition: border-color 200ms ease-in 0s;
    box-sizing: border-box;
    inline-size: calc(100% + 12px);
    block-size: calc(100% + 12px);
    top: -6px;
    left: -6px;
    background: transparent;
    border-radius: 500px;
    border: 3px solid transparent;
    content: "";
}
.jJyUnh:hover {
    border-color: #000000;
}
.OEwmv {
    margin: 32px 100px;
    border-right: none;
    border-bottom: none;
    border-left: none;
    border-image: initial;
    border-top: 1px solid rgb(41, 41, 41);
}
.bGYVrs {
    width: 324px;
    margin: 0px auto;
    padding-bottom: 0px;
}
</style> -->