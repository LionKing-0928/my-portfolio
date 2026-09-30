import { useState } from "react";

import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Chip from "@mui/material/Chip";
import Collapse from "@mui/material/Collapse";
import Container from "@mui/material/Container";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import { alpha, useTheme } from "@mui/material/styles";

import ArrowOutwardRounded from "@mui/icons-material/ArrowOutwardRounded";
import ExpandMoreRounded from "@mui/icons-material/ExpandMoreRounded";
import LanguageRounded from "@mui/icons-material/LanguageRounded";

import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";
import { asset } from "../asset";
import { projects, projectsSummary } from "../data/profile";

function hostOf(url) {
  try {
    return new URL(url).hostname.replace(/^www\./, "");
  } catch {
    return url;
  }
}

/** Screenshot when we have one, otherwise a branded placeholder. */
function ProjectPreview({ project }) {
  const theme = useTheme();
  const host = project.url ? hostOf(project.url) : project.title.toLowerCase();

  return (
    <Box
      sx={{
        position: "relative",
        aspectRatio: "12 / 5",
        overflow: "hidden",
        borderBottom: "1px solid",
        borderColor: "divider",
        backgroundColor: alpha(theme.palette.background.default, 0.6),
      }}
    >
      {project.image ? (
        <Box
          component="img"
          src={asset(project.image)}
          alt={`${project.title} homepage`}
          loading="lazy"
          sx={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
            objectPosition: "top center",
            display: "block",
            transition: theme.transitions.create("transform", { duration: 600 }),
            ".project-card:hover &": { transform: "scale(1.04)" },
          }}
        />
      ) : (
        <Box
          sx={{
            width: "100%",
            height: "100%",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            gap: 1,
            background: `linear-gradient(135deg, ${alpha(
              theme.palette.primary.main,
              0.2,
            )}, ${alpha(theme.palette.secondary.main, 0.2)})`,
          }}
        >
          <LanguageRounded sx={{ fontSize: 34, color: "primary.main" }} />
          <Typography
            sx={{
              fontFamily: theme.custom.mono,
              fontSize: 13,
              color: "text.secondary",
            }}
          >
            {host}
          </Typography>
        </Box>
      )}

      {/* Browser-style address bar over the preview. */}
      <Stack
        direction="row"
        spacing={0.75}
        sx={{
          position: "absolute",
          top: 0,
          right: 0,
          left: 0,
          alignItems: "center",
          px: 1.5,
          py: 1,
          backgroundColor: alpha(theme.palette.background.default, 0.82),
          backdropFilter: "blur(6px)",
          borderBottom: "1px solid",
          borderColor: "divider",
        }}
      >
        {["#ff5f57", "#febc2e", "#28c840"].map((dot) => (
          <Box
            key={dot}
            sx={{ width: 8, height: 8, borderRadius: "50%", bgcolor: dot }}
          />
        ))}

        <Typography
          sx={{
            ml: 1,
            fontFamily: theme.custom.mono,
            fontSize: 11,
            color: "text.secondary",
            overflow: "hidden",
            textOverflow: "ellipsis",
            whiteSpace: "nowrap",
          }}
        >
          {host}
        </Typography>
      </Stack>
    </Box>
  );
}

/**
 * One labelled part of the case study: "Overview", "Built", "Outcome"…
 * `children` is a string, or an array of strings for several paragraphs.
 */
function CaseRow({ label, children, sx }) {
  const theme = useTheme();
  const paragraphs = Array.isArray(children) ? children : [children];

  return (
    <Box sx={{ display: "flex", gap: 2, alignItems: "flex-start", ...sx }}>
      <Typography
        component="span"
        sx={{
          flexShrink: 0,
          width: 78,
          pt: "3px",
          fontFamily: theme.custom.mono,
          fontSize: 11,
          letterSpacing: "0.08em",
          textTransform: "uppercase",
          color: "primary.main",
        }}
      >
        {label}
      </Typography>
      <Stack spacing={1}>
        {paragraphs.map((paragraph, index) => (
          <Typography key={index} variant="body2" sx={{ color: "text.secondary" }}>
            {paragraph}
          </Typography>
        ))}
      </Stack>
    </Box>
  );
}

/** Challenges read as "Title — how it was solved" when they have a title. */
function challengeText(challenge) {
  return challenge.title ? (
    <>
      <Box component="strong" sx={{ color: "text.primary", fontWeight: 600 }}>
        {challenge.title}
      </Box>
      {" — "}
      {challenge.text}
    </>
  ) : (
    challenge.text
  );
}

function ProjectCard({ project, open, onToggle }) {
  const theme = useTheme();
  const detailsId = `case-study-${project.title.toLowerCase().replace(/\W+/g, "-")}`;
  const link = project.url
    ? {
        component: "a",
        href: project.url,
        target: "_blank",
        rel: "noreferrer noopener",
      }
    : {};

  return (
    <Card
      className="project-card"
      sx={{
        height: "100%",
        display: "flex",
        flexDirection: "column",
        overflow: "hidden",
        transition: theme.transitions.create([
          "transform",
          "border-color",
          "box-shadow",
        ]),
        "&:hover": {
          transform: "translateY(-6px)",
          borderColor: alpha(theme.palette.primary.main, 0.55),
          boxShadow: theme.custom.cardHoverShadow,
        },
      }}
    >
      <Box
        {...link}
        aria-label={project.url ? `Open ${project.title}` : undefined}
        sx={{ display: "block", textDecoration: "none" }}
      >
        <ProjectPreview project={project} />
      </Box>

      <CardContent
        sx={{
          p: 3.5,
          display: "flex",
          flexDirection: "column",
          flex: 1,
        }}
      >
        <Box
          sx={{
            display: "flex",
            flexWrap: "wrap",
            alignItems: "center",
            gap: 1.5,
            mb: 1.5,
          }}
        >
          <Box
            {...link}
            sx={{
              display: "inline-flex",
              alignItems: "center",
              gap: 1,
              color: "text.primary",
              textDecoration: "none",
              "&:hover": { color: "primary.main" },
            }}
          >
            <Typography variant="h4" sx={{ color: "inherit" }}>
              {project.title}
            </Typography>

            {project.url ? (
              <ArrowOutwardRounded
                sx={{
                  fontSize: 18,
                  color: "primary.main",
                  transition: theme.transitions.create("transform"),
                  ".project-card:hover &": {
                    transform: "translate(3px, -3px)",
                  },
                }}
              />
            ) : null}
          </Box>

          <Chip
            label={project.context}
            size="small"
            sx={{
              ml: "auto",
              fontFamily: theme.custom.mono,
              fontSize: 11,
              color: "text.secondary",
              bgcolor: alpha(theme.palette.primary.main, 0.1),
            }}
          />
        </Box>

        <Typography variant="body2" sx={{ mt: -0.5, mb: 2 }}>
          <Box component="span" sx={{ color: "primary.main", fontWeight: 600 }}>
            {project.role}
          </Box>
          {project.client ? (
            <Box component="span" sx={{ color: "text.secondary" }}>
              {" · "}
              {project.client}
            </Box>
          ) : null}
        </Typography>

        <CaseRow label="Overview">{project.overview}</CaseRow>

        <Collapse in={open} id={detailsId}>
          <Stack spacing={1.75} sx={{ pt: 1.75 }}>
            <CaseRow label="Built">{project.built}</CaseRow>
            {project.deployment ? (
              <CaseRow label="Deploy">{project.deployment}</CaseRow>
            ) : null}
            {project.challenges?.length ? (
              <CaseRow label="Challenge">
                {project.challenges.map(challengeText)}
              </CaseRow>
            ) : null}
            <CaseRow label="Outcome">{project.outcome}</CaseRow>
          </Stack>
        </Collapse>

        <Box
          sx={{
            display: "flex",
            flexWrap: "wrap",
            gap: 1,
            mt: "auto",
            pt: 2.5,
          }}
        >
          {project.stack.map((tag) => (
            <Chip
              key={tag}
              label={tag}
              size="small"
              variant="outlined"
              sx={{ color: "text.secondary" }}
            />
          ))}
        </Box>

        <Button
          onClick={onToggle}
          aria-expanded={open}
          aria-controls={detailsId}
          size="small"
          endIcon={
            <ExpandMoreRounded
              sx={{
                transition: theme.transitions.create("transform"),
                transform: open ? "rotate(180deg)" : "none",
              }}
            />
          }
          sx={{ alignSelf: "flex-start", mt: 2, ml: -1 }}
        >
          {open ? "Hide case study" : "Read case study"}
        </Button>
      </CardContent>
    </Card>
  );
}


function Projects() {
  const [openTitles, setOpenTitles] = useState(() => new Set());

  const toggle = (title) =>
    setOpenTitles((current) => {
      const next = new Set(current);
      if (next.has(title)) next.delete(title);
      else next.add(title);
      return next;
    });

  return (
    <Box component="section" id="projects" sx={{ py: { xs: 9, md: 14 } }}>
      <Container maxWidth="lg">
        <SectionHeading
          overline="Case studies"
          title="Work that shipped"
          subtitle={projectsSummary}
        />

        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: {
              xs: "1fr",
              sm: "repeat(2, 1fr)",
              lg: "repeat(3, 1fr)",
            },
            gap: { xs: 3, md: 3.5 },
            // Equal-height rows while collapsed; once a case study is open,
            // its neighbours keep their own height instead of stretching.
            alignItems: openTitles.size ? "start" : "stretch",
          }}
        >
          {projects.map((project, index) => (
            <Reveal
              key={project.title}
              delay={index * 80}
              sx={{ height: openTitles.size ? "auto" : "100%" }}
            >
              <ProjectCard
                project={project}
                open={openTitles.has(project.title)}
                onToggle={() => toggle(project.title)}
              />
            </Reveal>
          ))}
        </Box>
      </Container>
    </Box>
  );
}

export default Projects;