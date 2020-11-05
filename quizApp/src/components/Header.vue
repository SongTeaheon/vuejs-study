<template>
    <div>
        <b-nav tabs>
            <b-nav-item disabled><b>Fancy Quiz App</b></b-nav-item>
            <b-nav-item disabled>Counter : {{correctCnt}}/{{totalCnt}}</b-nav-item>
        </b-nav>
    </div>
</template>

<script>
export default {
    props : [
        'correctCnt',
        'totalCnt'
    ]
}
</script>