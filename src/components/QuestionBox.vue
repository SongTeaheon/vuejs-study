<template>
    <div>
        <b-jumbotron>

            <template #lead>
             {{currentQuestion.question}}
            </template>

            <hr class="my-4">

            <b-list-group>
                <b-list-group-item 
                    v-for="(answer, index) in answers" 
                    :key="index"
                    @click="selectAnswer(index)"
                    :class="answerClass(index)"
                >
                    {{ answer }}
                </b-list-group-item>
            </b-list-group>
            <b-button variant="primary" @click="submitAnswer" :disabled="selectedIndex == null || isAnswered">Submit</b-button>
            <b-button @click="next" variant="success" :disabled="!isAnswered">Next</b-button>
        </b-jumbotron>
    </div>
</template>

<script>
import _ from 'lodash';

export default {
    props : {
        currentQuestion : Object,
        next: Function,
        increment: Function
    },
    data(){
        return {
            selectedIndex: null,
            correctIndex: null,
            shuffledAnswers : [],
            isAnswered : false
        }
    },
    watch:{
        currentQuestion : {
            immediate:true,
            handler(){
                this.selectedIndex = null;
                this.shuffleAnswers()
                this.isAnswered = false;
            }
        }
    },
    computed:{
        answers(){
            let answers = [...this.currentQuestion.incorrect_answers]
            answers.push(this.currentQuestion.correct_answer)
            return answers
        }
    },
    methods:{
        selectAnswer(index){
            this.selectedIndex = index
            console.log(index)
        },
        shuffleAnswers(){
            console.log("suffleAnswers")
            let answers = [...this.currentQuestion.incorrect_answers, this.currentQuestion.correct_answer]
            this.shuffledAnswers = _.shuffle(answers)
            this.correctIndex = this.shuffledAnswers.indexOf(this.currentQuestion.correct_answer)
        },
        submitAnswer(){
            let isCorrect = false

            if(this.selectedIndex == this.correctIndex){
                isCorrect = true
            }
            this.isAnswered = true
            this.increment(isCorrect)
        },
        answerClass(index){
            if(!this.isAnswered && this.selectedIndex === index){
                return 'selected'
            }else if(this.isAnswered && this.correctIndex === index){
                return 'correct'
            }else if(this.isAnswered && this.correctIndex !== index && this.selectedIndex === index){
                return 'incorrect'
            }
            return ''
        }
    }
}
</script>

<style scoped>
    .list-group{
        margin-bottom : 15px;
    }
    .list-group-item:hover{
        background: #eee;
        cursor: pointer;
    }
    .btn {
        margin: 0 5px;
    }

    .selected{
        background-color : lightblue;
    }
    .correct{
        background-color: lightgreen;
    }
    .incorrect{
        background-color: red;
    }
</style>