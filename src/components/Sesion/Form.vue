<template>
  <v-card>
    <v-container
        fluid
        grid-list-lg
      >
      <v-card-title primary-title>
        <div>
          <div class="headline">{{title}}</div>
          <span>{{description}}</span>
        </div>
      </v-card-title>
      <v-form v-model="valid" >
        <v-text-field
          v-model="user.email"
          :rules="emailRules"
          label="E-mail"
          required
        />
        <v-text-field
          v-model="user.password"
          :rules="passwordRules"
          :counter="8"
          label="Password"
          required
        />
        <v-text-field
          v-if="action == 'register'"
          v-model="user.confirm_password"
          :rules="confirm_passwordRules"
          :counter="8"
          label="Password Confirm"
          required
        />
        <v-btn
        :disabled="!valid"
        @click="submit"
        >
        submit
        </v-btn>
        <v-btn @click="clear">clear</v-btn>
      </v-form>
      <v-card-actions>
        <v-btn flat dark>Listen now</v-btn>
      </v-card-actions>
    </v-container>
  </v-card>
</template>

<script>
export default {
  props: {
    title: String,
    description: String,
    action: String
  },
  data: () => ({
    valid: false,
    user: {
      email: '',
      password: '',
      confirm_password: ''
    },
    emailRules: [
      v => !!v || 'E-mail is required',
      v => /.+@.+/.test(v) || 'E-mail must be valid'
    ],
    passwordRules: [
      v => !!v || 'password is required',
      v => v.length == 8 || 'password must be less than 8 characters'
    ],
    confirm_passwordRules: [
      v => !!v || 'password confirm is required',
      v => v.length == 8 || 'password confirm must be less than 8 characters'
    ]
  }),
  methods: {
    submit () {
      this.$emit('sendForm', { users: this.user })
    },
    clear () {
      this.email             = "";
      this.password          = "";
      this.confirm_password  = "";
    }
  }
  }
</script>