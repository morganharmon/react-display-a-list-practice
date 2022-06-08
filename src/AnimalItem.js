export default function AnimalItem({ animal }) {
  return (
    <div style={{ border: 'solid 2px green' }}>
      <h5>
        Type: { animal.type }
      </h5>
      <div>
        Speed: { animal.speed }
      </div>
      <div>
        Deliciousness: { animal.deliciousness }
      </div>
    </div>
  );
}