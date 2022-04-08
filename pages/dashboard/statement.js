import DashboardLayout from '../../layout/dashboardLayout';
import { useArtist } from '../../layout/dashboardLayout';

export default function Statement() {
  const { artist } = useArtist();
  return (
    <div className="dashboard-container">
      <h2>Statement of {artist.name}</h2>
      <p>
        {artist.statement} of {artist.name}. Lorem ipsum dolor sit amet
        consectetur adipisicing elit. Aliquid soluta ab beatae tempore et
        laboriosam, optio odit placeat nam temporibus assumenda molestiae,
        repudiandae officiis? Fugit maiores dignissimos magnam dolorem autem
        ipsam ex distinctio ducimus voluptatem, itaque accusamus dolorum facere.
        Obcaecati culpa excepturi distinctio, vitae, et laborum iste a dolores
        vero sint aliquid quaerat voluptate eius esse velit architecto nihil
        labore. Fugit dolores magni iusto omnis laudantium, accusamus
        consequuntur numquam repellat vel vitae repellendus, error ipsam, animi
        in nemo dolorum tempore.
      </p>
    </div>
  );
}

Statement.Layout = DashboardLayout;
