"use client";

import { useEffect, useState } from "react";
import { useUserState } from "@/lib/use-user-state";
import { X, Trophy } from "lucide-react";

interface Notification {
  id: string;
  type: string;
  message: string;
}

export function NotificationToaster() {
  const { isLoggedIn, loading } = useUserState();
  const [notifications, setNotifications] = useState<Notification[]>([]);
  const [visibleIndexes, setVisibleIndexes] = useState<Set<number>>(new Set());

  useEffect(() => {
    if (loading || !isLoggedIn) return;

    let cancelled = false;

    async function fetchNotifications() {
      try {
        const res = await fetch("/api/notifications");
        if (!res.ok) return;
        const data = await res.json();
        
        if (!cancelled && data.notifications && data.notifications.length > 0) {
          setNotifications(data.notifications);
          setVisibleIndexes(new Set(data.notifications.map((_: any, i: number) => i)));

          // Mark them as read immediately in the background
          const ids = data.notifications.map((n: Notification) => n.id);
          fetch("/api/notifications", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ notificationIds: ids }),
          }).catch(() => {});
          
          // Auto-dismiss after 8 seconds
          setTimeout(() => {
            if (!cancelled) {
              setVisibleIndexes(new Set());
              setTimeout(() => {
                if (!cancelled) setNotifications([]);
              }, 300); // Wait for fade out animation
            }
          }, 8000);
        }
      } catch (err) {
        // Silently fail
      }
    }

    fetchNotifications();

    return () => {
      cancelled = true;
    };
  }, [isLoggedIn, loading]);

  const dismiss = (index: number) => {
    setVisibleIndexes((prev) => {
      const next = new Set(prev);
      next.delete(index);
      return next;
    });
  };

  if (notifications.length === 0) return null;

  return (
    <div className="fixed bottom-4 right-4 z-50 flex flex-col gap-2 pointer-events-none w-full max-w-sm px-4 sm:px-0">
      {notifications.map((notif, index) => (
        <div
          key={notif.id}
          className={`transform transition-all duration-300 pointer-events-auto flex items-start gap-3 p-4 rounded-xl border shadow-2xl ${
            visibleIndexes.has(index) ? "translate-x-0 opacity-100" : "translate-x-8 opacity-0"
          }`}
          style={{ background: "#111", borderColor: "var(--brand-primary)" }}
        >
          <div className="flex-shrink-0 mt-0.5">
            <Trophy className="w-5 h-5" style={{ color: "var(--brand-primary)" }} />
          </div>
          <div className="flex-1">
            <p className="text-sm text-white font-medium leading-relaxed">
              {notif.message}
            </p>
          </div>
          <button
            onClick={() => dismiss(index)}
            className="flex-shrink-0 text-[var(--text-muted)] hover:text-white transition-colors"
          >
            <X className="w-4 h-4" />
          </button>
        </div>
      ))}
    </div>
  );
}
