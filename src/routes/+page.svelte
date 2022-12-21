<script lang="ts">
	import loginImage from '$lib/images/login.svg';
	import { DatabaseStore } from '../database';

	type User = {
		id: number;
		userEmail: string;
		userPassword: string;
	};

	let userPassword = '';
	let userEmail = '';

	const handleLogin = () => {
		let existingUser: User[] = [];

		// fetch saved data from database store
		DatabaseStore.subscribe((data) => (existingUser = data));

		// check if user does not exist
		const found = existingUser.some(
			(user) => user.userEmail === userEmail && user.userPassword === userPassword
		);
		if (!found) {
			alert('User not found please sign up to continue');
		} else {
			alert('Login successfully');
		}
		// console.log(existingUser);
	};
</script>

<!-- <nav>
	<a href="/">Home</a>
	<a href="/signup">Sign up</a>
</nav> -->

<div class="login-top"><img src={loginImage} alt="login" /></div>
<div class="login-bottom">
	<h3>Welcome Back!</h3>
	<p>Please Log into your existing account</p>
	<form class="form">
		<input
			type="email"
			class="email-input"
			id="email"
			placeholder="Your Email"
			bind:value={userEmail}
			required
		/>
		<input
			type="password"
			class="password-input"
			id="password"
			placeholder="Your Password"
			bind:value={userPassword}
			required
		/>
		<button type="submit" class="login btn" on:click={handleLogin}>Login</button>
	</form>
	<a href="/signup"><button class="signup btn">Sign Up</button></a>
</div>

<style>
	.login-bottom {
		height: 50%;
		width: 100%;
		text-align: center;
	}
	.login-top {
		height: 40%;
		width: 100%;
		display: flex;
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
		width: 100%;
		font-size: 20px;
		font-weight: bold;
		margin-top: 10px;
		background: var(--secondary-color);
		border-radius: 20px;
		color: var(--neutral-color);
	}
</style>
