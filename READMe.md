# Profile Card Component

A fully accessible, responsive profile card component built with semantic HTML, modern CSS, and vanilla JavaScript.

![Profile Card Preview](https://img.shields.io/badge/Status-Production%20Ready-success)
![HTML5](https://img.shields.io/badge/HTML5-E34F26?logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?logo=javascript&logoColor=black)

## 🌟 Features

### Core Functionality
- ✅ **Semantic HTML5** - Uses proper semantic elements (`<article>`, `<nav>`, `<section>`, `<figure>`)
- ✅ **Fully Accessible** - WCAG 2.1 AA compliant with ARIA labels and keyboard navigation
- ✅ **Responsive Design** - Mobile-first approach with tablet and desktop breakpoints
- ✅ **Real-time Updates** - Current time in milliseconds updates every second
- ✅ **Test-Ready** - All elements include `data-testid` attributes for automated testing

### Accessibility Features
- ♿ Keyboard navigable with visible focus states
- ♿ Screen reader friendly with proper ARIA labels and roles
- ♿ High contrast mode support
- ♿ Reduced motion support for users with vestibular disorders
- ♿ Semantic structure for assistive technologies
- ♿ Proper alt text for images

### Design Features
- 📱 Mobile-first responsive design
- 🎨 Modern gradient backgrounds
- ✨ Smooth animations and transitions
- 🎯 Clean, intuitive layout
- 💅 Hover and focus states for interactive elements

## 📋 Required Elements

All elements include the specified `data-testid` attributes:

| Element | Test ID | Description |
|---------|---------|-------------|
| Profile Card Container | `test-profile-card` | Main article wrapper |
| User Name | `test-user-name` | User's full name |
| User Bio | `test-user-bio` | Short biography paragraph |
| User Time | `test-user-time` | Current time in milliseconds |
| User Avatar | `test-user-avatar` | Profile picture with alt text |
| Social Links List | `test-user-social-links` | Container for all social links |
| Twitter Link | `test-user-social-twitter` | Individual Twitter link |
| GitHub Link | `test-user-social-github` | Individual GitHub link |
| LinkedIn Link | `test-user-social-linkedin` | Individual LinkedIn link |
| Hobbies List | `test-user-hobbies` | User's hobbies list |
| Dislikes List | `test-user-dislikes` | User's dislikes list |

## 🚀 Quick Start

### Run Locally

1. **Clone the repository**
   ```bash
   git clone https://github.com/yourusername/profile-card.git
   cd profile-card
   ```

## 📱 Responsive Breakpoints

The component adapts to different screen sizes:

| Breakpoint | Width | Layout |
|------------|-------|--------|
| Mobile | < 768px | Vertical stack, centered avatar |
| Tablet | 768px - 1023px | Side-by-side layout |
| Desktop | ≥ 1024px | Side-by-side with larger avatar |

### Mobile View
- Avatar centered at top
- Content stacked vertically
- Full-width social links
- Single column for hobbies/dislikes

### Desktop View
- Avatar aligned to top-left
- Content flows beside avatar
- Two-column grid for hobbies/dislikes
- Horizontal social link layout

## 🧪 Testing

### Manual Testing Checklist

- [ ] All `data-testid` attributes are present
- [ ] Time displays current milliseconds and updates every second
- [ ] Avatar image loads with proper alt text
- [ ] All social links open in new tab with secure rel attributes
- [ ] Keyboard navigation works (Tab through all links)
- [ ] Focus states are visible
- [ ] Layout responds to viewport changes
- [ ] Content wraps properly on small screens

### Automated Testing

Use the `data-testid` attributes to target elements in your test suite:

```javascript
// Example with Testing Library
const profileCard = screen.getByTestId('test-profile-card');
const userName = screen.getByTestId('test-user-name');
const userTime = screen.getByTestId('test-user-time');
const avatar = screen.getByTestId('test-user-avatar');
const socialLinks = screen.getByTestId('test-user-social-links');
const twitterLink = screen.getByTestId('test-user-social-twitter');
const hobbies = screen.getByTestId('test-user-hobbies');
const dislikes = screen.getByTestId('test-user-dislikes');

// Verify time is current
expect(parseInt(userTime.textContent)).toBeCloseTo(Date.now(), -2);
```

## 🎨 Customization

### Changing Profile Information

Edit the HTML content in `index.html`:

```html
<!-- Name -->
<h1 class="user-name" data-testid="test-user-name">Your Name</h1>

<!-- Bio -->
<p class="user-bio" data-testid="test-user-bio">
    Your biography text here...
</p>

<!-- Avatar -->
<img 
    src="your-image-url.jpg" 
    alt="Your alt text"
    data-testid="test-user-avatar"
>
```

### Styling

The component uses CSS custom properties for easy theming. Key classes:

- `.profile-card` - Main container
- `.avatar-section` - Avatar background and layout
- `.content-section` - Main content area
- `.social-link` - Social media link styling
- `.list-section` - Hobbies/dislikes sections

## 🌐 Deployment


### GitHub Pages

- Create and push the project to a git repo
- Go to Settings - GitHub Pages - Setup and the repo automatically deploys

## 📖 Documentation References

- [MDN - HTML Semantics](https://developer.mozilla.org/en-US/docs/Web/HTML/Element)
- [MDN - Accessible Images](https://developer.mozilla.org/en-US/docs/Web/Accessibility/Images)
- [WCAG 2.1 Guidelines](https://www.w3.org/WAI/WCAG21/quickref/)
- [WAI-ARIA Best Practices](https://www.w3.org/WAI/ARIA/apg/)

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 👤 Author

**Your Name**
- GitHub: [Osinachi Patrick] (https://github.com/SinachPat)
- Twitter: [Patrick](https://twitter.com/0xsinachpat)


**Live Demo:** [Profile Card](https://sinachpat.github.io/profile_card/)

**Repository:** [GitHub Repo](https://github.com/SinachPat/profile_card)