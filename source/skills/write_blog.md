---
name: "hexo-article-helper"
description: "Helps convert copied article content into Hexo blog posts with proper frontmatter and structure. Invoke when user pastes article content and wants to publish it to their Hexo blog."
---

# Hexo Article Helper

This skill helps you convert copied article content into properly formatted Hexo blog posts, including adding frontmatter, organizing structure, and preparing for deployment.

## When to Use

Invoke this skill when:
- User pastes article content and wants to publish it to their Hexo blog
- User needs help formatting content for Hexo
- User wants to convert existing notes or documents into blog posts
- User asks for assistance with creating Hexo blog posts

## How to Use

1. **Paste your article content** in the chat
2. **Provide metadata information** (if not included in the content):
   - Article title
   - Publication date (default: current date)
   - Categories
   - Tags
   - Description (for SEO and summaries)
3. **Wait for the skill to process** your content
4. **Review the generated Markdown file**
5. **Deploy to your blog** when satisfied

## Processing Steps

1. **Extract metadata automatically** from the Markdown content:
   - Title: Extract from the first heading (#)
   - Categories: Extract from lines starting with "Categories:"
   - Tags: Extract from lines starting with "Tags:"
   - Description: Extract from lines starting with "Description:" or first paragraph
   - Date: Use current date if not specified
   - Target Directory: Extract from lines starting with "Directory:" or use default

2. **Generate frontmatter** with proper YAML format
3. **Clean and format** the content for Markdown
4. **Create a new article file** in the specified directory (default: `source/_posts/`)
5. **Provide deployment instructions**

## Automatic Metadata Extraction

The skill can automatically identify metadata from your Markdown content using these patterns:

### Title Detection
- Looks for the first level-1 heading (`# Title`)
- If no heading found, uses the first non-empty line

### Category Detection
- Looks for lines starting with `Categories:` or `Category:`
- Example: `Categories: Programming, Web Development`
- Supports multiple categories separated by commas

### Tag Detection
- Looks for lines starting with `Tags:` or `Tag:`
- Example: `Tags: Python, JavaScript, Learning`
- Supports multiple tags separated by commas

### Description Detection
- Looks for lines starting with `Description:`
- If not found, uses the first paragraph (first 150 characters)

### Date Detection
- Looks for lines starting with `Date:` or `Published:`
- Example: `Date: 2026-02-25`
- If not found, uses current date and time

### Target Directory Detection
- Looks for lines starting with `Directory:` or `Path:`
- Example: `Directory: source/_posts/技术`
- Example: `Directory: source/_posts/日记`
- If not found, uses default directory `source/_posts/`

## Example Input/Output

### Input 1: With explicit metadata
```markdown
# My Journey with Python

Date: 2026-02-25
Categories: Programming, Python
Tags: Python, Learning, Tutorial
Description: My 6-month journey learning Python programming language.

I've been learning Python for the past 6 months and it's been an amazing journey. Here's what I've learned:

## Getting Started

The first step was installing Python and setting up my development environment. I used VS Code with the Python extension.

## Key Concepts

- Variables and data types
- Control flow (if statements, loops)
- Functions
- Object-oriented programming
```

### Output 1:
```
Created article file: source/_posts/My-Journey-with-Python.md

File content:
---
title: My Journey with Python
date: 2026-02-25
categories:
  - Programming
  - Python
tags:
  - Python
  - Learning
  - Tutorial
description: My 6-month journey learning Python programming language.
---

I've been learning Python for the past 6 months and it's been an amazing journey. Here's what I've learned:

## Getting Started

The first step was installing Python and setting up my development environment. I used VS Code with the Python extension.

## Key Concepts

- Variables and data types
- Control flow (if statements, loops)
- Functions
- Object-oriented programming


Next steps:
1. Preview: npm run server
2. Build: npm run build
3. Deploy: npm run deploy
```

### Input 2: Without explicit metadata
```markdown
# JavaScript Basics

JavaScript is a versatile programming language used primarily for web development. It allows developers to create interactive elements on websites.

## Variables

In JavaScript, variables are declared using var, let, or const keywords.

## Functions

Functions are reusable blocks of code that perform a specific task.
```

### Output 2:
```
Created article file: source/_posts/JavaScript-Basics.md

File content:
---
title: JavaScript Basics
date: 2026-02-25 16:30:00
categories: Uncategorized
tags: []
description: JavaScript is a versatile programming language used primarily for web development. It allows developers to create interactive elements on websites.
---

JavaScript is a versatile programming language used primarily for web development. It allows developers to create interactive elements on websites.

## Variables

In JavaScript, variables are declared using var, let, or const keywords.

## Functions

Functions are reusable blocks of code that perform a specific task.


Next steps:
1. Preview: npm run server
2. Build: npm run build
3. Deploy: npm run deploy
```

### Input 3: With specified directory and Chinese title
```markdown
# Java值传递

Directory: source/_posts/技术/Java
Categories: 技术/Java
Tags: Java, 值传递, 编程基础
Description: 深入解析Java值传递机制，通过实例代码分析常见陷阱及解决方案。

## 核心概念

Java语言规范明确：所有参数传递都是值传递...
```

### Output 3:
```
Created article file: source/_posts/技术/Java/Java值传递.md

File content:
---
title: Java值传递
date: 2026-02-25 17:00:00
categories: 技术/Java
tags:
  - Java
  - 值传递
  - 编程基础
description: 深入解析Java值传递机制，通过实例代码分析常见陷阱及解决方案。
---

## 核心概念

Java语言规范明确：所有参数传递都是值传递...


Next steps:
1. Preview: npm run server
2. Build: npm run build
3. Deploy: npm run deploy
```

### Input 4: Diary entry with date-based naming
```markdown
# 2026年2月25日 今天的学习

Categories: 日记
Tags: 学习, 日常
Description: 今天学习了Java值传递和Hexo博客搭建。

## 上午

学习了Java值传递的核心概念和常见陷阱...

## 下午

搭建了Hexo博客并创建了skill包...
```

### Output 4:
```
Created article file: source/_posts/日记/2026年2月25日 今天的学习.md

File content:
---
title: 2026年2月25日 今天的学习
date: 2026-02-25
categories: 日记
tags:
  - 学习
  - 日常
description: 今天学习了Java值传递和Hexo博客搭建。
---

## 上午

学习了Java值传递的核心概念和常见陷阱...

## 下午

搭建了Hexo博客并创建了skill包...


Next steps:
1. Preview: npm run server
2. Build: npm run build
3. Deploy: npm run deploy
```

## Frontmatter Defaults

If metadata is not detected, the skill will use these defaults:

- **title**: Extract from the first heading or first non-empty line
- **date**: Current date and time in YYYY-MM-DD HH:mm:ss format
- **categories**: Uncategorized
- **tags**: Empty list []
- **description**: First paragraph (up to 150 characters)

## Tips for Better Automatic Detection

1. **Start with a clear title** using `# Title` format
2. **Include metadata at the beginning** of your document:
   ```markdown
   # Title
   
   Date: 2026-02-25
   Categories: Category1, Category2
   Tags: tag1, tag2, tag3
   Description: Brief description of your article
   
   Content starts here...
   ```

3. **Use consistent formatting** for metadata lines
4. **Keep metadata lines separate** from content
5. **Use descriptive first paragraphs** for better auto-generated descriptions

## Limitations

- This skill does not automatically deploy the article (you need to run deploy commands)
- It does not handle image uploads (images need to be added manually to the `source/images/` directory)
- It may not handle complex formatting perfectly (manual adjustments may be needed)
- It does not support batch processing multiple articles at once

## Troubleshooting

If the generated article has issues:
1. **Frontmatter errors**: Check YAML syntax (indentation, colons, quotes)
2. **Markdown formatting**: Ensure proper heading hierarchy and syntax
3. **File naming**: Verify file paths use valid characters (avoid spaces and special characters)
4. **Metadata detection**: Check if metadata lines are properly formatted and positioned
5. **Local testing**: Always preview locally before deployment

## Advanced Usage

### Custom File Naming

#### 1. Default File Naming (English titles)

For English titles, the skill generates file names based on the title:
- Replaces spaces with hyphens
- Converts to lowercase
- Removes special characters

Example: "My Journey with Python" → `my-journey-with-python.md`

#### 2. Chinese File Naming (保持中文文件名)

For Chinese titles, the skill preserves the original Chinese characters:
- Keeps spaces as spaces
- Preserves Chinese characters
- Removes only invalid file system characters

Example: "Java值传递" → `Java值传递.md`
Example: "2026年2月25日 我的日记" → `2026年2月25日 我的日记.md`

#### 3. Diary-Specific Naming

For diary entries, the skill can automatically format file names based on date:
- Detects diary content from title or categories
- Uses format: `YYYY年MM月DD日 标题.md`
- Example: "2026年2月25日 今天学习了Java" → `2026年2月25日 今天学习了Java.md`

### Directory Management

#### 1. Automatic Directory Creation

The skill automatically creates directories if they don't exist:
- Example: `Directory: source/_posts/技术/Java` → creates nested directories
- Ensures proper path structure for organized content

#### 2. Category-Based Directories

You can map categories to directories automatically:

| Category | Suggested Directory |
|----------|--------------------|
| 技术/Java | source/_posts/技术/Java |
| 日记 | source/_posts/日记 |
| 读书笔记 | source/_posts/读书笔记 |
| 生活感悟 | source/_posts/生活感悟 |

#### 3. Diary Directory Special Handling

For diary entries:
- Automatically uses `source/_posts/日记/` directory
- File names follow date-based format
- Supports monthly subdirectories (e.g., `source/_posts/日记/2026-02/`)

### Multi-level Categories

You can specify multi-level categories using slashes:

```markdown
Categories: Technology/Programming/Python
```

This will generate:
```yaml
categories:
  - Technology/Programming/Python
```

### Batch Processing Tips

For multiple articles, process them one by one:
1. Paste and process each article separately
2. Review each generated file
3. Deploy all at once using `npm run deploy`

## Use Cases

### Case 1: Converting Class Notes

**Input:**
```markdown
# Math 101: Algebra Basics

Date: 2026-02-24
Categories: Education, Math
Tags: algebra, equations, learning
Description: Notes from my algebra class covering basic equations and problem-solving techniques.

## Solving Linear Equations

A linear equation is an equation that forms a straight line when graphed.

### Steps to Solve:
1. Simplify both sides of the equation
2. Isolate the variable term
3. Solve for the variable
4. Check your solution

## Quadratic Equations

Quadratic equations have the form ax² + bx + c = 0.
```

**Output:**
- File: `source/_posts/math-101-algebra-basics.md`
- Properly formatted with frontmatter and content

### Case 2: Converting Blog Drafts

**Input:**
```markdown
# Top 10 Productivity Tools for Developers

As a developer, staying productive is crucial. Here are my favorite tools:

1. VS Code - Powerful code editor
2. Git - Version control system
3. Trello - Project management
4. Slack - Team communication
5. Docker - Containerization

These tools have significantly improved my workflow and helped me stay organized.
```

**Output:**
- File: `source/_posts/top-10-productivity-tools-for-developers.md`
- Auto-generated frontmatter with title, date, and description
- Cleaned content ready for deployment

### Case 3: Converting Research Notes

**Input:**
```markdown
# Climate Change Research Findings

Date: 2026-02-20
Categories: Science, Environment
Tags: climate change, research, sustainability

## Key Findings

- Global temperatures have risen by 1.1°C since pre-industrial times
- Sea levels are rising at an accelerated rate
- Arctic sea ice is declining rapidly
- Extreme weather events are becoming more frequent

## Potential Solutions

1. Reduce greenhouse gas emissions
2. Transition to renewable energy
3. Improve energy efficiency
4. Protect and restore ecosystems
```

**Output:**
- File: `source/_posts/climate-change-research-findings.md`
- Complete frontmatter with all detected metadata
- Structured content ready for publication

## Conclusion

The Hexo Article Helper skill simplifies the process of creating and publishing blog posts by automating the conversion of your existing content into properly formatted Hexo articles. With its automatic metadata detection and Markdown formatting capabilities, you can quickly turn your notes, drafts, and research into professional-looking blog posts.

Remember to:
1. Format your content properly for best results
2. Include clear metadata at the beginning of your documents
3. Preview locally before deployment
4. Enjoy sharing your knowledge with the world through your Hexo blog!
