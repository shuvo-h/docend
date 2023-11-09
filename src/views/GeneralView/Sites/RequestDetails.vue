<template>
    <div class="row">
        <div>
            details 1
            account_id: requited
            response
            <div>200 Success</div>
            <div>401 Unauthorized</div>
            <hr>
            <h3>Accounts</h3>
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
        

    </div>
</template>

<script>
export default {

}
</script>

<style scoped>
    .two_col{
        display: grid;
        grid-template-columns: 300px 1fr;
    }
</style>