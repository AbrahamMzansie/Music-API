export interface HTTPResponse {
	success: boolean;
	data: Record<string, unknown>;
	message?: string | Record<string, unknown>;
	error?: string | Record<string, unknown>;
}
