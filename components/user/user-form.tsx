'use client';

import * as React from 'react';
import { useForm } from 'react-hook-form';
import { Grid, TextInput, Button } from '@mantine/core';
import * as z from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { userSchema } from '@/lib/validations/user';

type FormData = z.infer<typeof userSchema>;

export function UserForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({
    resolver: zodResolver(userSchema),
  });
  const onSubmit = (data: FormData) => {
    console.log(data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Grid>
        <Grid.Col span={4}>
          <TextInput
            label="First name"
            placeholder="Your name"
            required
            error={errors.firstName?.message}
            {...register('firstName')}
          />
        </Grid.Col>
        <Grid.Col span={4}>
          <TextInput
            label="Last name"
            placeholder="Your last name"
            required
            error={errors.lastName?.message}
            {...register('lastName')}
          />
        </Grid.Col>
        <Grid.Col span={4}>
          <TextInput
            label="Email"
            placeholder="Your email"
            required
            type="email"
            error={errors.email?.message}
            {...register('email')}
          />
        </Grid.Col>
        <Grid.Col span={4}>
          <TextInput
            label="Personal email"
            placeholder="Your personal email"
            type="email"
            error={errors.personalEmail?.message}
            {...register('personalEmail')}
          />
        </Grid.Col>
        <Grid.Col span={4}>
          <TextInput
            label="Certified email"
            placeholder="Your certified email"
            type="email"
            error={errors.certifiedEmail?.message}
            {...register('certifiedEmail')}
          />
        </Grid.Col>
        <Grid.Col span={4}>
          <TextInput
            label="Phone"
            placeholder="Your phone number"
            error={errors.phone?.message}
            {...register('phone')}
          />
        </Grid.Col>
        <Grid.Col span={4}>
          <TextInput
            label="Birth date"
            placeholder="Your birth date"
            error={errors.birthDate?.message}
            {...register('birthDate')}
          />
        </Grid.Col>
        <Grid.Col span={4}>
          <TextInput
            label="Github username"
            placeholder="Your github username"
            error={errors.githubUsername?.message}
            {...register('githubUsername')}
          />
        </Grid.Col>
        <Grid.Col span={4}>
          <TextInput
            label="Jira username"
            placeholder="Your jira username"
            error={errors.jiraUsername?.message}
            {...register('jiraUsername')}
          />
        </Grid.Col>
      </Grid>
      <Button type="submit">Submit</Button>
    </form>
  );
}
