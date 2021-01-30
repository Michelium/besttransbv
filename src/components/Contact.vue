<template>
    <section id="contact">
        <div class="row mx-0 mb-2">
            <div class="col-12 col-md-10 col-lg-8 offset-md-1 offset-lg-2">
                <h3>Contact</h3>
                <hr>
            </div>
        </div>
        <div class="row mx-0">
            <div class="col-12 col-md-6 offset-md-1 col-lg-5 offset-lg-2">
                <form action="" @submit.prevent="sendEmail">
                    <div v-if="success" class="alert alert-success alert-dismissible fade show" role="alert">
                        <p>Uw bericht is verstuurd!</p>
                    </div>
                    <div class="form-group">
                        <label for="name">NAAM:</label>
                        <input type="text" v-model="name" name="name" id="name" required class="form-control">
                    </div>
                    <div class="form-group">
                        <label for="email">EMAIL:</label>
                        <input type="email" v-model="email" name="email" id="email" required class="form-control">
                    </div>
                    <div class="form-group">
                        <label for="phone">TELEFOON: (niet verplicht)</label>
                        <input type="text" v-model="phone" name="phone" id="phone" class="form-control">
                    </div>
                    <div class="form-group">
                        <label for="message">HOE KUNNEN WIJ HELPEN?</label>
                        <textarea name="message" v-model="content" id="message" rows="4" required class="form-control"></textarea>
                    </div>
                    <button :disabled="!loaded" type="submit" class="btn btn-block btn-light">STUUR BERICHT</button>
                </form>
            </div>
            <div class="col-12 col-md-4 col-lg-3 d-none d-md-block">
                <img class="float-right" src="@/assets/images/contact.jpg" alt="Contact">
            </div>
        </div>
    </section>
</template>

<script>
import emailjs from 'emailjs-com';

export default {
    name: 'Contact',
    data() {
        return {
            name: '',
            email: '',
            phone: '',
            content: '',
            errors: {},
            success: false,
            loaded: true,
        }
    },
    methods: {
        sendEmail(e) {
            if (this.loaded) {
                this.loaded = false;
                this.success = false;
                emailjs.sendForm('service_0v0fruk', 'template_r4mv4ek', e.target, 'user_5EsQHMW2uTGVfimVRKRFU')
                    .then((result) => {
                        console.log('SUCCESS!', result.status, result.text);
                        this.name = '';
                        this.email = '';
                        this.phone = '';
                        this.content = '';
                        this.loaded = true;
                        this.success = true;
                    }, (error) => {
                        this.loaded = true;
                        this.success = false;
                        console.log('FAILED...', error);
                    });
            }

        }
    }
}

</script>


<style scoped>
.row:first-of-type {
    margin-top: 80px;
}

h3 {
    color: #B43C39;
}

img {
    width: 80%;
    border: #707070 solid 1px;
}

button {
    background-color: #B43C39;
    height: 60px;
    font-size: 30px;
    border-radius: 0.478em;
    color: white;
}

button:hover {
    background-color: #c44b48;
}
</style>
