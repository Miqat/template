<script>
  import logo from '../../../assets/MiqatLogo.svg';
  import Link from '../../atoms/Link/Link.svelte';
  import Logo from '../../atoms/Logo/Logo.svelte';
  import Paragraph from '../../atoms/Paragraph/Paragraph.svelte';
  import Title from '../../atoms/Title/Title.svelte';

</script>

<Logo src={logo} alt="miqat" />
<Title />
<Paragraph>
  Visit the <Link href="https://svelte.dev/tutorial">Svelte tutorial</Link> to learn
  how to build Svelte apps.
</Paragraph>
