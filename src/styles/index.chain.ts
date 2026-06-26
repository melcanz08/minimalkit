import { chain } from 'chaincss'

// ============================================================
// Design Tokens
// ============================================================
const colors = {
  primary: '#6366f1',
  primaryDark: '#4f46e5',
  bg: '#0f172a',
  bgCard: '#1e293b',
  bgCardHover: '#334155',
  text: '#f1f5f9',
  textMuted: '#94a3b8',
  border: '#334155',
  white: '#ffffff',
}

// ============================================================
// Buttons
// ============================================================
export const btnPrimary = chain()
  .bg(colors.primary)
  .color(colors.white)
  .padding('12px 24px')
  .rounded(8)
  .fontSize(16)
  .fontWeight(600)
  .display('inline-flex')
  .alignItems('center')
  .gap(8)
  .cursor('pointer')
  .border('none')
  .transition('all 0.2s ease')
  .textDecoration('none')
  .hover()
    .bg(colors.primaryDark)
    .transform('translateY(-1px)')
    .shadow('0 4px 12px rgba(99,102,241,0.4)')
  .end()
  .$el('btn-primary')

export const btnOutline = chain()
  .bg('transparent')
  .color(colors.text)
  .padding('12px 24px')
  .rounded(8)
  .fontSize(16)
  .fontWeight(600)
  .display('inline-flex')
  .alignItems('center')
  .gap(8)
  .cursor('pointer')
  .border(`2px solid ${colors.border}`)
  .transition('all 0.2s ease')
  .textDecoration('none')
  .hover()
    .border(`2px solid ${colors.primary}`)
    .color(colors.primary)
  .end()
  .$el('btn-outline')

// ============================================================
// Feature Cards
// ============================================================
export const featureCard = chain()
  .bg(colors.bgCard)
  .padding(32)
  .rounded(12)
  .border(`1px solid ${colors.border}`)
  .transition('all 0.3s ease')
  .hover()
    .bg(colors.bgCardHover)
    .transform('translateY(-4px)')
    .shadow('0 8px 30px rgba(0,0,0,0.3)')
  .end()
  .$el('feature-card')

export const featureIcon = chain()
  .fontSize(32)
  .marginBottom(16)
  .display('block')
  .$el('feature-icon')

// ============================================================
// Pricing Cards
// ============================================================
export const pricingCard = chain()
  .bg(colors.bgCard)
  .padding(40)
  .rounded(16)
  .border(`1px solid ${colors.border}`)
  .display('flex')
  .flexDirection('column')
  .gap(20)
  .transition('all 0.3s ease')
  .hover()
    .border(`1px solid ${colors.primary}`)
    .transform('translateY(-4px)')
  .end()
  .$el('pricing-card')

export const pricingCardFeatured = chain()
  .bg(`linear-gradient(135deg, ${colors.primary}, #8b5cf6)`)
  .padding(40)
  .rounded(16)
  .border(`2px solid ${colors.primary}`)
  .display('flex')
  .flexDirection('column')
  .gap(20)
  .position('relative')
  .transform('scale(1.05)')
  .shadow('0 12px 40px rgba(99,102,241,0.3)')
  .$el('pricing-card-featured')

// ============================================================
// CTA Section
// ============================================================
export const ctaSection = chain()
  .bg(`linear-gradient(135deg, ${colors.primary}, #8b5cf6)`)
  .padding('80px 24px')
  .textAlign('center')
  .rounded(24)
  .margin('60px auto')
  .maxW(900)
  .$el('cta-section')

// ============================================================
// Navbar
// ============================================================
export const navbar = chain()
  .bg('rgba(15,23,42,0.95)')
  .backdropFilter('blur(20px)')
  .borderBottom(`1px solid ${colors.border}`)
  .position('sticky')
  .top(0)
  .z(100)
  .padding('16px 0')
  .$el('navbar')

// ============================================================
// Global Styles
// ============================================================
export const body = chain()
  .bg(colors.bg)
  .color(colors.text)
  .fontFamily("'Inter', system-ui, -apple-system, sans-serif")
  .margin(0)
  .padding(0)
  .minHeight('100vh')
  .$el('body')

// Typography
export const h1 = chain()
  .fontSize(56)
  .fontWeight(800)
  .lineHeight(1.1)
  .marginBottom(24)
  .letterSpacing('-0.02em')
  .$el('h1')

export const h2 = chain()
  .fontSize(40)
  .fontWeight(700)
  .lineHeight(1.2)
  .marginBottom(16)
  .letterSpacing('-0.01em')
  .$el('h2')

export const subtitle = chain()
  .fontSize(18)
  .color(colors.textMuted)
  .lineHeight(1.6)
  .maxW(600)
  .marginBottom(48)
  .$el('section-subtitle')
