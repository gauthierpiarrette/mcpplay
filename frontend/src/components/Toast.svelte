<script lang="ts">
  import { CheckCircle2, AlertCircle, Info } from "lucide-svelte";

  let {
    message,
    type = "info",
  }: { message: string; type?: "info" | "error" | "success" } = $props();

  const icons = {
    info: Info,
    error: AlertCircle,
    success: CheckCircle2,
  };

  let Icon = $derived(icons[type]);

  const colorStyles = {
    info: "border-blue-200 bg-blue-50 text-blue-900 dark:border-blue-800/60 dark:bg-blue-950/90 dark:text-blue-100",
    error:
      "border-red-200 bg-red-50 text-red-900 dark:border-red-800/60 dark:bg-red-950/90 dark:text-red-100",
    success:
      "border-green-200 bg-green-50 text-green-900 dark:border-green-800/60 dark:bg-green-950/90 dark:text-green-100",
  };

  const iconStyles = {
    info: "text-blue-500 dark:text-blue-400",
    error: "text-red-500 dark:text-red-400",
    success: "text-green-500 dark:text-green-400",
  };
</script>

<div class="toast-container" role="status" aria-live="polite">
  <div
    class={`flex items-center gap-3 rounded-lg border px-4 py-3 shadow-lg backdrop-blur-sm ${colorStyles[type]}`}
  >
    <div class={iconStyles[type]}>
      <Icon size={18} />
    </div>
    <span class="text-sm font-medium">{message}</span>
  </div>
</div>

<style>
  .toast-container {
    position: fixed;
    bottom: 1.5rem;
    right: 1.5rem;
    z-index: 9999;
    max-width: 28rem;
    animation: toast-in 0.3s ease-out;
    pointer-events: auto;
  }

  @keyframes toast-in {
    from {
      opacity: 0;
      transform: translateY(12px) scale(0.96);
    }
    to {
      opacity: 1;
      transform: translateY(0) scale(1);
    }
  }
</style>
