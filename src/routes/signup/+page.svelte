<script lang="ts">
	import { DatabaseStore } from '../../database';

	type User = {
		id: number;
		userEmail: string;
		userPassword: string;
	};

	let userPassword = '';
	let pswConfirm = '';
	let userEmail = '';

	const handleSignup = () => {
		let id = 0;
		let existingUser: User[] = [];

		//check if user enter correct password
		if (userPassword != pswConfirm) {
			alert('Wrong password');
			return;
		}

		// fetch saved data from database store
		DatabaseStore.subscribe((data) => (existingUser = data));
		const { length } = existingUser;
		id = length + 1;

		// check if user already exist
		const found = existingUser.some((user) => user.userEmail === userEmail);
		if (found) {
			alert('User already exists');
		}
		// update database store
		if (!found) {
			DatabaseStore.update((user) => [...user, { id, userEmail, userPassword }]),
				alert('Account created successfully');
		}
	};
</script>

<div class="signup-top" />
<div class="signup-bottom">
	<h3>Welcome New User!</h3>
	<p>Please enter your details to create a new account</p>
	<form class="form">
		<input
			type="email"
			class="email"
			id="email"
			placeholder="Your Email"
			required
			bind:value={userEmail}
		/>
		<input
			type="password"
			class="password"
			id="password"
			placeholder="Your Password"
			bind:value={userPassword}
			required
		/>
		<input
			type="password"
			class="password-confirm"
			id="password-confirm"
			placeholder="Confirm Password"
			bind:value={pswConfirm}
			required
		/>
		<button type="submit" class="signup btn" on:click={handleSignup}>Sign Up</button>
		<p><a href="/">Login to continue</a></p>
	</form>
</div>

<style>
	.signup-top,
	.signup-bottom {
		height: 50%;
		width: 100%;
		text-align: center;
	}
	.signup-top {
		display: flex;
		height: 40%;
		align-items: center;
		justify-content: center;
	}
	.form {
		display: flex;
		flex-direction: column;
		text-align: center;
	}

	.form input {
		border-radius: 20px;
		border: 1px solid var(--neutral-color);
		color: var(--neutral-color);
		background: transparent;
		height: 58px;
		margin: 10px 0;
		font-size: 14px;
		padding: 10px;
	}

	.form input:focus {
		outline: none;
	}

	.btn {
		border: none;
		height: 58px;
		font-size: 20px;
		font-weight: bold;
		margin-top: 10px;
		background: var(--secondary-color);
		border-radius: 20px;
		color: var(--neutral-color);
	}
</style>
