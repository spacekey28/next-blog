import BlogPost from '../../components/BlogPost';
export const meta = {
  published: true,
  publishedAt: '2019-01-15',
  title: 'This is my very first blog post',
  summary:
    'I am learning how to build a blog using Markdown in a static web page build on top of Next.js'
};
export default ({ children }) => <BlogPost meta={meta}>{children}</BlogPost>;
Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque maximus pellentesque dolor non egestas. In sed tristique elit. Cras vehicula, nisl vel ultricies gravida, augue nibh laoreet arcu, et tincidunt augue dui non elit.