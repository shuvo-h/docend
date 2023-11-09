<template>
  <section class="row">
        <div>details 2</div>
        <div>
            API Response code snippet response 2
            <pre style="color:#00FFFF;background-color:#000; width:fit-content;">{{site}} code</pre>
        </div>

        <div>
            API Response code snippet response 1
            <div>
                <button>POST</button>
                <span>/platform/api/v1/accounts</span>
            </div>
            <div>
                <h1>Request Sample</h1>
                <button>Payload</button>
                <div class="codeSnipet">
                    <p>content type</p>
                    <code>application/json; charset=utf-8</code>
                    <pre>
{{`{
    "name":"string"
}`}}
                    </pre>
                </div>
            </div>
            <div>
                <h1>Response Sample</h1>
                <button>200</button>
                <div class="codeSnipet">
                    <p>content type</p>
                    <code>application/json; charset=utf-8</code>
                    <pre>
{{`{
    "id":"string"
    "name":"string"
}`}}
                    </pre>
                </div>
            </div>
        </div>


    </section>
</template>

<script>
export default {

}
</script>

<style scoped>
    .codeSnipet{
        color: #00FFFF;
        background-color: #000;
        width: fit-content;
        padding: 10px;
    }
   
</style>