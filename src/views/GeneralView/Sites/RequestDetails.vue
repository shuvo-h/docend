<template>
    <div class="row response_section">
            <h3 class="title">Accounts</h3>
            <div>
                <h4 class="subtitle">Create an Account</h4>
                <div>
                    <!-- Authorization section  -->
                    <div>
                        <details :open="false">
                            <summary>
                                <div style="display:inline-block; width:98%;">
                                    <div style="display:grid;grid-template-columns:284px 1fr;">
                                        <div>
                                            <span>Authorization details</span>
                                        </div>
                                        <div>
                                            <span>platformAppApiKey</span>
                                        </div>
                                    </div>
                                </div>
                            </summary>
                            <div>
                                <h3> &#128274; API Key: platformAppApiKey</h3>
                                <p>This token can be obtained by the system admin after creating a platformApp. This token should be used to provision agent bots, accounts, users and their roles.</p>
                                <p style="font-weight:600">Header parameter name: <span style="color:red; background:lightgray;">api_access_token</span></p>
                                <hr>
                            </div>
                        </details>
                    </div>

                    <!-- Request body schema Section -->
                    <div style="margin-top:2rem;">
                        <div class="two_col">
                            <div>
                                <p>REQUEST BODY SCHEMA:</p>
                                <small style="color:red;">required</small>
                            </div>
                            <div>
                                <p>application/json; charset=utf-8</p>
                            </div>
                        </div>
                        <hr>
                        <ul>
                            <li class="two_col">
                                <div> - name</div>
                                <div>
                                    <p>string</p>
                                    <p>Name of the account</p>
                                    <hr>
                                </div>
                            </li>
                            <li class="two_col">
                                <div> - inbox_id</div>
                                <div>
                                    <p>number</p>
                                    <p>Id of the inbox</p>
                                    <hr>
                                </div>
                            </li>
                        </ul>
                    </div>

                    <!-- Path Params Section -->
                    <div style="margin-top:2rem;">
                        <div class="two_col">
                            <div>
                                <p>PATH PARAMETERS:</p>
                                <small style="color:red;">required</small>
                            </div>
                            <div>
                                <p>no query need</p>
                            </div>
                        </div>
                        <hr>
                        <ul>
                            <li class="two_col">
                                <div> - name</div>
                                <div>
                                    <p>string</p>
                                    <p>Name of the account</p>
                                    <hr>
                                </div>
                            </li>
                            <li class="two_col">
                                <div> - inbox_id</div>
                                <div>
                                    <p>number</p>
                                    <p>Id of the inbox</p>
                                    <hr>
                                </div>
                            </li>
                        </ul>
                    </div>
                    

                    <!-- Response from server  -->
                    <div>
                        <h4>Response</h4>
                        <div>
                            <ul style="list-style:none; padding-left:0;">
                                <li>
                                    <details>
                                        <summary style="background-color: lightgray; color:green;">
                                            <span>
                                                <span>200</span>
                                            </span>
                                                <p>Success</p>
                                        </summary>
                                        <div>
                                            <div class="two_col">
                                                <div>RESPONSE SCHEMA:</div>
                                                <div>application/json; charset=utf-8</div>
                                            </div>
                                            <hr>
                                            <ul>
                                                <li class="two_col">
                                                    <div> - name</div>
                                                    <div>
                                                        <p>string</p>
                                                        <p>Name of the account</p>
                                                        <hr>
                                                    </div>
                                                </li>
                                                <li class="two_col">
                                                    <div> - inbox_id</div>
                                                    <div>
                                                        <p>number</p>
                                                        <p>Id of the inbox</p>
                                                        <hr>
                                                    </div>
                                                </li>
                                            </ul>
                                        </div>
                                    </details>
                                </li>
                                <li>
                                    <details>
                                        <summary style="background-color: lightgray; color:red;">
                                            <span>
                                                <span>401</span>
                                            </span>
                                                <p>Unauthorized</p>
                                        </summary>
                                        <div>
                                            <div class="two_col">
                                                <div>RESPONSE SCHEMA:</div>
                                                <div>application/json; charset=utf-8</div>
                                            </div>
                                            <hr>
                                            <ul>
                                                <li class="two_col">
                                                    <div> - token</div>
                                                    <div>
                                                        <p>string</p>
                                                        <p>Token is required</p>
                                                        <hr>
                                                    </div>
                                                </li>
                                                <li class="two_col">
                                                    <div> - inbox_id</div>
                                                    <div>
                                                        <p>number</p>
                                                        <p>Invalid inbox Id</p>
                                                        <hr>
                                                    </div>
                                                </li>
                                            </ul>
                                        </div>
                                    </details>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            <hr>
    </div>
</template>

<script>
export default {

}
</script>

<style scoped lang="scss">
    .two_col{
        display: grid;
        grid-template-columns: 300px 1fr;
    }
    details > summary:-webkit-details-marker{
        display: inline-block;
    }
    .response_section{
        .title{
            font-weight: 700;
            font-size: 30px;
            margin: 0 auto 3.5rem auto;
        }
        .subtitle{
            font-weight: 700;
            font-size: 25px;
            margin: 0 auto 2rem auto;
        }
    }
</style>