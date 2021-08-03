import userActionTypes from './user.types';
import {
	googleSignInStart,
	emailSignInStart,
	signInSuccess,
	signInFailure,
	checkUserSession,
	signOutStart,
	signOutSuccess,
	signOutFailure,
	signUpStart,
	signUpSuccess,
	signUpFailure,
} from './user.actions';

describe('googleSignInStart', () => {
	it('should create the googleSignInStart action', () => {
		expect(googleSignInStart().type).toEqual(
			userActionTypes.GOOGLE_SIGN_IN_START
		);
	});
});

describe('emailSignInStart', () => {
	const mockCredentials = {
		email: 'hola@gmail.com',
		password: '123',
	};

	it('should create the emailSignInStart action', () => {
		expect(emailSignInStart(mockCredentials).type).toEqual(
			userActionTypes.EMAIL_SIGN_IN_START
		);
		expect(emailSignInStart(mockCredentials).payload).toEqual(mockCredentials);
	});
});

describe('signInSuccess', () => {
	const mockUser = {
		email: 'hola@gmail.com',
		password: '123',
		displayName: 'hola',
	};

	it('should create the signInSuccess action', () => {
		expect(signInSuccess(mockUser).type).toEqual(
			userActionTypes.SIGN_IN_SUCCESS
		);
		expect(signInSuccess(mockUser).payload).toEqual(mockUser);
	});
});

describe('signInFailure', () => {
	const mockError = 'error';

	it('should create the signInFailure action', () => {
		expect(signInFailure(mockError).type).toEqual(
			userActionTypes.SIGN_IN_FAILURE
		);
		expect(signInFailure(mockError).payload).toEqual(mockError);
	});
});

describe('SignOutStart', () => {
	it('should create the googleSignInStart action', () => {
		expect(signOutStart().type).toEqual(userActionTypes.GOOGLE_SIGN_OUT_START);
	});
});

describe('SignOutSuccess', () => {
	it('should create the signInSuccess action', () => {
		expect(signOutSuccess().type).toEqual(userActionTypes.SIGN_OUT_SUCCESS);
	});
});

describe('SignOutFailure', () => {
	const mockError = 'error';

	it('should create the signInFailure action', () => {
		expect(signOutFailure(mockError).type).toEqual(
			userActionTypes.SIGN_OUT_FAILURE
		);
		expect(signOutFailure(mockError).payload).toEqual(mockError);
	});
});

describe('signUpStart', () => {
	const mockCredentials = {
		email: 'hola@gmail.com',
		password: '123',
	};

	it('should create the signUpStart action', () => {
		expect(signUpStart(mockCredentials).type).toEqual(
			userActionTypes.SIGN_UP_START
		);
		expect(signUpStart(mockCredentials).payload).toEqual(mockCredentials);
	});
});

describe('signUpSuccess', () => {
	const mockUser = {
		email: 'hola@gmail.com',
		password: '123',
	};

	const mockAditionalData = {
		displayName: 'hola',
	};

	it('should create the signUpSuccess action', () => {
		expect(signUpSuccess({ mockUser, mockAditionalData }).type).toEqual(
			userActionTypes.SIGN_UP_SUCCESS
		);
		expect(signUpSuccess({ mockUser, mockAditionalData }).payload).toEqual({
			mockUser,
			mockAditionalData,
		});
	});
});

describe('signUpFailure', () => {
	const mockError = 'error';

	it('should create the signUpFailure action', () => {
		expect(signUpFailure(mockError).type).toEqual(
			userActionTypes.SIGN_UP_FAILURE
		);
		expect(signUpFailure(mockError).payload).toEqual(mockError);
	});
});

describe('checkUserSession', () => {
	it('should create the checkUserSession action', () => {
		expect(checkUserSession().type).toEqual(userActionTypes.CHECK_USER_SESSION);
	});
});
