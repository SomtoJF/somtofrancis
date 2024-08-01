run: run_dev

run_dev: 
	pnpm dev

clean: 
	pkill -f "pnpm dev"

.PHONY: run run_dev