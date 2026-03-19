mkdir -p parche-app/{app,src,assets,supabase} \
&& mkdir -p parche-app/app/'(auth)' \
&& mkdir -p parche-app/app/'(tabs)' \
&& mkdir -p parche-app/app/plans/'[planId]' \
&& mkdir -p parche-app/app/invite \
&& mkdir -p parche-app/src/core/{config,db,navigation,providers,hooks} \
&& mkdir -p parche-app/src/features/auth/{api,components,hooks,schemas,types} \
&& mkdir -p parche-app/src/features/plans/{api,components,hooks,schemas,store,types,utils} \
&& mkdir -p parche-app/src/features/participants/{api,components,hooks,schemas,types} \
&& mkdir -p parche-app/src/features/invitations/{api,components,hooks,types} \
&& mkdir -p parche-app/src/features/checklist/{api,components,hooks,schemas,types} \
&& mkdir -p parche-app/src/features/expenses/{api,components,hooks,schemas,types} \
&& mkdir -p parche-app/src/features/polls/{api,components,hooks,schemas,types} \
&& mkdir -p parche-app/src/shared/components/{ui,feedback} \
&& mkdir -p parche-app/src/shared/{utils,constants,types,lib} \
&& mkdir -p parche-app/src/styles \
&& mkdir -p parche-app/assets/{images,icons,fonts} \
&& mkdir -p parche-app/supabase/{migrations,functions} \
&& mkdir -p parche-app/supabase/functions/{join-plan-by-token,respond-to-invitation,create-plan} \
&& touch \
parche-app/app/_layout.tsx \
parche-app/app/index.tsx \
parche-app/app/'(auth)'/_layout.tsx \
parche-app/app/'(auth)'/sign-in.tsx \
parche-app/app/'(auth)'/sign-up.tsx \
parche-app/app/'(tabs)'/_layout.tsx \
parche-app/app/'(tabs)'/home.tsx \
parche-app/app/'(tabs)'/plans.tsx \
parche-app/app/'(tabs)'/profile.tsx \
parche-app/app/'(tabs)'/settings.tsx \
parche-app/app/plans/create.tsx \
parche-app/app/plans/'[planId]'.tsx \
parche-app/app/plans/'[planId]'/participants.tsx \
parche-app/app/plans/'[planId]'/checklist.tsx \
parche-app/app/plans/'[planId]'/expenses.tsx \
parche-app/app/plans/'[planId]'/polls.tsx \
parche-app/app/invite/'[token]'.tsx \
parche-app/src/core/config/env.ts \
parche-app/src/core/config/constants.ts \
parche-app/src/core/db/supabase.ts \
parche-app/src/core/db/types.ts \
parche-app/src/core/db/mappers.ts \
parche-app/src/core/navigation/routes.ts \
parche-app/src/core/providers/app-provider.tsx \
parche-app/src/core/providers/auth-provider.tsx \
parche-app/src/core/providers/query-provider.tsx \
parche-app/src/core/hooks/use-session.ts \
parche-app/src/core/hooks/use-debounced-value.ts \
parche-app/src/features/auth/api/sign-in.ts \
parche-app/src/features/auth/api/sign-up.ts \
parche-app/src/features/auth/api/sign-out.ts \
parche-app/src/features/auth/components/auth-form.tsx \
parche-app/src/features/auth/components/social-login-buttons.tsx \
parche-app/src/features/auth/hooks/use-auth.ts \
parche-app/src/features/auth/schemas/sign-in.schema.ts \
parche-app/src/features/auth/schemas/sign-up.schema.ts \
parche-app/src/features/auth/types/auth.types.ts \
parche-app/src/features/plans/api/create-plan.ts \
parche-app/src/features/plans/api/get-plan-by-id.ts \
parche-app/src/features/plans/api/get-user-plans.ts \
parche-app/src/features/plans/api/update-plan.ts \
parche-app/src/features/plans/api/delete-plan.ts \
parche-app/src/features/plans/components/plan-card.tsx \
parche-app/src/features/plans/components/plan-form.tsx \
parche-app/src/features/plans/components/plan-header.tsx \
parche-app/src/features/plans/components/empty-plans-state.tsx \
parche-app/src/features/plans/hooks/use-create-plan.ts \
parche-app/src/features/plans/hooks/use-plan.ts \
parche-app/src/features/plans/hooks/use-user-plans.ts \
parche-app/src/features/plans/schemas/plan.schema.ts \
parche-app/src/features/plans/store/plan-draft.store.ts \
parche-app/src/features/plans/types/plan.types.ts \
parche-app/src/features/plans/utils/format-plan-date.ts \
parche-app/src/features/plans/utils/plan-status-label.ts \
parche-app/src/features/participants/api/get-plan-participants.ts \
parche-app/src/features/participants/api/join-plan.ts \
parche-app/src/features/participants/api/respond-to-invitation.ts \
parche-app/src/features/participants/api/remove-participant.ts \
parche-app/src/features/participants/components/participant-list.tsx \
parche-app/src/features/participants/components/participant-item.tsx \
parche-app/src/features/participants/components/attendance-badge.tsx \
parche-app/src/features/participants/hooks/use-plan-participants.ts \
parche-app/src/features/participants/hooks/use-respond-to-invitation.ts \
parche-app/src/features/participants/schemas/attendance.schema.ts \
parche-app/src/features/participants/types/participant.types.ts \
parche-app/src/features/invitations/api/create-invitation.ts \
parche-app/src/features/invitations/api/get-invitation-by-token.ts \
parche-app/src/features/invitations/api/revoke-invitation.ts \
parche-app/src/features/invitations/components/share-invite-button.tsx \
parche-app/src/features/invitations/components/invite-link-card.tsx \
parche-app/src/features/invitations/hooks/use-create-invitation.ts \
parche-app/src/features/invitations/types/invitation.types.ts \
parche-app/src/features/checklist/api/create-checklist-item.ts \
parche-app/src/features/checklist/api/update-checklist-item.ts \
parche-app/src/features/checklist/api/get-checklist-items.ts \
parche-app/src/features/checklist/api/assign-checklist-item.ts \
parche-app/src/features/checklist/components/checklist-item-row.tsx \
parche-app/src/features/checklist/components/checklist-list.tsx \
parche-app/src/features/checklist/components/checklist-form.tsx \
parche-app/src/features/checklist/hooks/use-checklist-items.ts \
parche-app/src/features/checklist/hooks/use-update-checklist-item.ts \
parche-app/src/features/checklist/schemas/checklist-item.schema.ts \
parche-app/src/features/checklist/types/checklist.types.ts \
parche-app/src/features/expenses/api/create-expense.ts \
parche-app/src/features/expenses/api/get-plan-expenses.ts \
parche-app/src/features/expenses/api/update-expense.ts \
parche-app/src/features/expenses/api/delete-expense.ts \
parche-app/src/features/expenses/api/settle-expenses.ts \
parche-app/src/features/expenses/components/expense-card.tsx \
parche-app/src/features/expenses/components/expense-form.tsx \
parche-app/src/features/expenses/components/settlement-summary.tsx \
parche-app/src/features/expenses/hooks/use-plan-expenses.ts \
parche-app/src/features/expenses/hooks/use-create-expense.ts \
parche-app/src/features/expenses/schemas/expense.schema.ts \
parche-app/src/features/expenses/types/expense.types.ts \
parche-app/src/features/polls/api/create-poll.ts \
parche-app/src/features/polls/api/get-plan-polls.ts \
parche-app/src/features/polls/api/vote-poll.ts \
parche-app/src/features/polls/api/close-poll.ts \
parche-app/src/features/polls/components/poll-card.tsx \
parche-app/src/features/polls/components/poll-form.tsx \
parche-app/src/features/polls/components/poll-options-list.tsx \
parche-app/src/features/polls/hooks/use-plan-polls.ts \
parche-app/src/features/polls/hooks/use-vote-poll.ts \
parche-app/src/features/polls/schemas/poll.schema.ts \
parche-app/src/features/polls/types/poll.types.ts \
parche-app/src/shared/components/ui/app-button.tsx \
parche-app/src/shared/components/ui/app-input.tsx \
parche-app/src/shared/components/ui/app-text.tsx \
parche-app/src/shared/components/ui/app-modal.tsx \
parche-app/src/shared/components/ui/app-avatar.tsx \
parche-app/src/shared/components/ui/app-badge.tsx \
parche-app/src/shared/components/ui/app-loader.tsx \
parche-app/src/shared/components/ui/screen-container.tsx \
parche-app/src/shared/components/feedback/empty-state.tsx \
parche-app/src/shared/components/feedback/error-state.tsx \
parche-app/src/shared/components/feedback/offline-banner.tsx \
parche-app/src/shared/utils/date.ts \
parche-app/src/shared/utils/currency.ts \
parche-app/src/shared/utils/strings.ts \
parche-app/src/shared/utils/links.ts \
parche-app/src/shared/constants/app-colors.ts \
parche-app/src/shared/constants/spacing.ts \
parche-app/src/shared/constants/query-keys.ts \
parche-app/src/shared/types/api.types.ts \
parche-app/src/shared/types/common.types.ts \
parche-app/src/shared/lib/zod.ts \
parche-app/src/shared/lib/dayjs.ts \
parche-app/src/styles/global.css \
parche-app/src/styles/theme.ts \
parche-app/src/styles/tokens.ts \
parche-app/supabase/seed.sql \
parche-app/.env \
parche-app/.env.example \
parche-app/app.json \
parche-app/babel.config.js \
parche-app/expo-env.d.ts \
parche-app/package.json \
parche-app/tsconfig.json \
parche-app/README.md