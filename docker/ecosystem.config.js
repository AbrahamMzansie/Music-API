module.exports = [
	{
		script: 'dist/server.js',
		name: 'server',
		exec_mode: 'cluster',
		instances: 'max',
		autorestart: true,
		restart_delay: 4000,
		max_memory_restart: '300M',
	},
];
