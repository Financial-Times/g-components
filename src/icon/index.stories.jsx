import Icon from './';

export default {
  title: 'Core/Icon',
  component: Icon,
};

export const Examples = {
  render: () => (
    <>
      Basic:
      <div
        style={{
          padding: '1em',
        }}
      >
        <Icon iconName="arrow-down" />
        <Icon iconName="arrow-left" />
        <Icon iconName="arrow-right" />
        <Icon iconName="arrow-up" />
      </div>
      Basic with custom tint and size:
      <div
        style={{
          padding: '1em',
        }}
      >
        <Icon
          iconName="arrow-down"
          iconColor="#990F3D"
          width={50}
          height={50}
          accessibleLabel="Down"
        />
        <Icon
          iconName="arrow-left"
          iconColor="#0F5499"
          width={50}
          height={50}
          accessibleLabel="Left"
        />
        <Icon
          iconName="arrow-right"
          iconColor="#0D7680"
          width={50}
          height={50}
          accessibleLabel="Right"
        />
        <Icon iconName="arrow-up" iconColor="#593380" width={50} height={50} accessibleLabel="Up" />
      </div>
    </>
  ),

  name: 'Examples',
};
