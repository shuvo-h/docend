<template>
    <div class="row response_section">
            <h3 class="title">Accounts</h3>
            <div>
                <h4>Create an Account</h4>
                <div>
                    heaser body details
                    <div class="two_col">
                        <div>Authorization</div>
                        <div>platformAppApiKey</div>
                    </div>
                    <div class="two_col">
                        <div>Request Body Schema</div>
                        <div>application/json; charset=utf-8</div>
                    </div>
                    <hr>
                    <div class="two_col">
                        <div>name</div>
                        <div>string(Name of the account)</div>
                    </div>
                    <h4>Response</h4>
                    <div style="background-color: lightgray;">
                        <div> &gt;200 </div>
                        <div> -401 </div>
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
    .response_section{
        .title{
            font-weight: 700;
            font-size: 30px;
            margin: 0 auto 3.5rem auto;
        }
    }
</style>