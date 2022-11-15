import { createClient } from "@supabase/supabase-js"

const PROJECT_URL = "https://jadymlphqukujsvsbekg.supabase.co"
const PROJECT_KEY =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImphZHltbHBocXVrdWpzdnNiZWtnIiwicm9sZSI6ImFub24iLCJpYXQiOjE2Njg1MzY5NDIsImV4cCI6MTk4NDExMjk0Mn0.l2mORIKFauACl48rsJwEP3Y5lGjWWJsY6-mQOKpMH1s"
const supabase = createClient(PROJECT_URL, PROJECT_KEY)

export function VideoService() {
  return {
    getAllVideos() {
      return supabase.from("video")
        .select("*")
    }
  }
}