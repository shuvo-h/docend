<template>
  <section>
    <div>
        <input type="text" placeholder="search here">
    </div>
    <div>
        <div>
            <ul>
                <li>
                    <label for="">Platform</label>
                    <ul>
                        <li>
                            <label for="">Users API</label>
                            <ul>
                                <li><label for="">Careate User</label></li>
                                <li><label for="">Get User</label></li>
                                <li><label for="">Delete User</label></li>
                                <li><label for="">Update User</label></li>
                            </ul>
                        </li>
                    </ul>
                </li>
                <li>
                    <label for="">Application</label>
                    <ul>
                        <li>
                            <label for="">Video API</label>
                            <ul>
                                <li><label for="">Add a Video</label></li>
                                <li><label for="">Get Video</label></li>
                                <li><label for="">Delete Video</label></li>
                                <li><label for="">Update Video</label></li>
                            </ul>
                        </li>
                    </ul>
                </li>
            </ul>
        </div>
        <div>
            <label for="">API docs by BondBridgeLink Inc.</label>
        </div>
        <pre>{{dtObj}}</pre>
    </div>
  </section>
</template>

<script>

const dtObj = {
    site: 'Bond Bridge Link',
    section:[
        {
            name: "Platform",
            categories: [
                {
                    title:"Users API",
                    apiList: [
                        {
                            hash:"create_user",
                            title:"Create User",
                        },
                        {
                            hash:"get_user",
                            title:"Get User",
                        },
                        {
                            hash:"delete_user",
                            title:"Delete User",
                        },
                        {
                            hash:"update_user",
                            title:"Update User",
                        },
                    ],
                },
            ]
        },
    ],
}
export default {
    setup(){
        return{
            dtObj
        }
    }
}
</script>

<style>

</style>