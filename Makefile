.PHONY: docker-up
docker-up:
	@docker compose --env-file ./backend/.env up -d

.PHONY: docker-down
docker-down:
	@docker compose --env-file ./backend/.env down
