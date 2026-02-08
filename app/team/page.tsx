"use client"

import * as React from "react"
import { Users as UsersIcon } from "lucide-react"
import { motion } from "framer-motion"
import { useTranslation } from "react-i18next"
import { Card, CardHeader, CardContent } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { cn } from "@/lib/utils"

const fadeInVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut"
    }
  }
}

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
}

const honorificPrefixes = ["mr", "mr.", "mrs", "mrs.", "ms", "ms.", "dr", "dr.", "prof", "prof.", "sir", "dame"]

const teamAvatarColors = ["bg-slate-700", "bg-blue-700", "bg-slate-600", "bg-blue-600", "bg-slate-800", "bg-blue-800"]

function getInitials(name: string) {
  if (!name) return ""

  const parts = name
    .trim()
    .split(/\s+/)
    .filter((part, index) => !(index === 0 && honorificPrefixes.includes(part.toLowerCase())))

  const letters = parts
    .filter(Boolean)
    .slice(0, 2)
    .map((part) => part[0]?.toUpperCase() ?? "")
    .filter(Boolean)

  if (letters.length === 0) return ""
  if (letters.length === 1) return letters[0]
  return `${letters[0]}${letters[1]}`
}

export default function TeamPage() {
  const { t } = useTranslation()

  const teamMembers = React.useMemo(() => {
    const data = t("teamPage.teamMembers", { returnObjects: true }) as Record<string, any>
    if (!data) return []

    return Object.entries(data)
      .filter(([key]) => key !== "title")
      .map(([, member], index) => ({
        ...member,
        avatarColor: teamAvatarColors[index % teamAvatarColors.length],
      }))
  }, [t])

  return (
    <main className="overflow-hidden">
      {/* Hero Section */}
      <section className="relative pt-32 pb-16 md:pt-40 md:pb-24">
        <div className="mx-auto max-w-7xl px-6">
          <motion.div 
            className="text-center"
            initial="hidden"
            animate="visible"
            variants={fadeInVariants}
          >
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold">
              {t('teamPage.title')}
            </h1>
            <p className="mt-6 text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
              {t('teamPage.subtitle')}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Team Members Section */}
      <section className="py-16 md:py-24 bg-muted/50">
        <div className="mx-auto max-w-7xl px-6">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeInVariants}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold">
              {t('teamPage.teamMembers.title')}
            </h2>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={containerVariants}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {teamMembers.map((member, index) => (
              <motion.div key={index} variants={fadeInVariants}>
                <Card 
                  className={cn(
                    "group h-full border-slate-300 hover:border-slate-600 transition-all duration-300",
                    "hover:shadow-lg hover:shadow-slate-600/20"
                  )}
                >
                  <CardHeader className="text-center">
                    <Avatar className="w-24 h-24 mx-auto mb-4 border-2 border-slate-300 group-hover:border-slate-600 transition-colors">
                      <AvatarImage src="" alt={member.name} />
                      <AvatarFallback className={cn(member.avatarColor, "text-white text-xl font-semibold")}>
                        {getInitials(member.name)}
                      </AvatarFallback>
                    </Avatar>
                    <h3 className="text-xl font-semibold">{member.name}</h3>
                    <p className="text-sm text-slate-600 font-medium">{member.role}</p>
                  </CardHeader>
                  <CardContent className="text-center">
                    <p className="text-sm text-muted-foreground">{member.bio}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>
    </main>
  )
}
